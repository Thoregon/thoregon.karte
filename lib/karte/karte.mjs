/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { myuniverse, tservices }        from '/evolux.universe';
import { isString }                     from '/evolux.util';

import Entry                            from "./entry.mjs";
import { pathDown }                     from "./util.mjs";

export default class Karte {

    constructor(root) {
        if (!root) root = universe;
        this.root = root;
        this._children = new Entry(root, '.', this);
    }

    get children() {
        return new Promise(async resolve => {
            resolve(await this._children.children);
        });
    }

    get name() {
        return "Universe";
    }

    async path(accesspath) {
        return await this._children.path(accesspath);
    }

    /*
     * service implementation
     */
    install() {}
    uninstall() {}
    resolve() {}
    start() {
        myuniverse().Karte = new Karte();
    }
    stop() {
        delete myuniverse.Karte;
    }
    update() {}
}
