    /**
 *
 *
 * @author: Bernhard Lukassen
 */

import { isCollection }         from '/evolux.matter';
import { forEach, isFunction }  from '/evolux.util';
import {pathDown} from "./util.mjs";
import {ErrNoEntry} from "../errors.mjs";

export default class Entry {

    constructor(node, prop, parent, val) {
        this.parent = parent;
        this.node   = node;
        this.prop   = prop;
        this._val   = val;
    }

    get val() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this._val) {
                    if (this._hasAccess()) {
                        if (Number.isFinite(this.prop)) {
                            // treat as collection index
                            let keys = await this.parent.refids();
                            if (keys[this.prop]) {
                                this._val = await (this.parent.node[keys[this.prop]]).val;
                            }
                        } else {
                            this._val = await this.node.val;
                        }
                    } else {
                        this._val = this.node;
                    }
                }

                resolve(this._val);
            } catch (e) {
                reject(e);
            }
        });
    }

    async hasChildren() {
        return this._hasAccess() && await this.node.ownKeys.length > 0;
    }

    get children() {
        return new Promise(async resolve => {
            let children = {};

            if (this._hasAccess()) {
                let keys = await this.node.ownKeys;
                keys.forEach(key => {
                    let childnode = this.node[key];
                    let childentry = new Entry(childnode, key, this);
                    children[key] = childentry;
                });
            }

            resolve(children);
        });
    }

    get name() {
        return this.prop;
    }


    async path(accesspath) {
        let { next, rest } = pathDown(accesspath);
        if (next) {
            let item;
            if (Number.isFinite(next)) {
                // treat as collection index
                let keys = await this.parent.refids();
                if (keys[next]) {
                    item = new Entry(keys[next], key, this);
                }
            } else {
                let children = await this.children;
                item = children[next];
            }
            if (!item) {
                let obj = await this.val;
                return obj ? new Entry(null, next, this, obj[next]) : undefined;
            }
            return (item && rest)
                ? await item.path(rest)
                : item;
        }
    }

    async refids() {
        return await this.node.refids;
    }

    // **** private

    _hasAccess() {
        return this.node && (!!this.node.$access || !!this.node.$universe);
    }
}

