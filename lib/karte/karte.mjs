/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { myuniverse, tservices }        from '/evolux.universe';
import { isString }                     from '/evolux.util';
import { EventEmitter}                  from "/evolux.pubsub";
import { Reporter }                     from "/evolux.supervise";

import Entry                            from "./entry.mjs";
import { pathDown }                     from "./util.mjs";

import { ErrNoEntry }                   from "../errors.mjs";

export default class Karte  {

    constructor(root) {
        if (!root) root = universe;
        this.root = root;
        this._children = new Entry(root, '.', this);
        this._handlers = [];
    }

    async lookup(urn) {
        // first check if there is a protocol/entity selector
        let handler = this.getProtocolHandler(urn);
        let result = handler
            ? await handler.lookup(urn, this)
            : await this.path(urn);

        if (!result) throw ErrNoEntry(urn);

        return result;
    }

    /*
     * structural
     */

    get children() {
        return this._children.children;
    }

    get name() {
        return "Universe";
    }

    async path(accesspath) {
        return await this._children.path(accesspath);
    }

    /*
     * protocol handlers
     */

    use(handler) {
        this._handlers.push(handler);
    }

    getProtocolHandler(urn) {
        try {
            return this._handlers.find((handler) => handler.matches(urn));
        } catch (e) {
            this.logger.error()
        }
    }

    /*
     * service implementation
     */

    install() {}
    uninstall() {}
    resolve() {}
    start() {
        myuniverse().KARTE = this;
    }
    stop() {
        delete myuniverse().KARTE;
    }
    update() {}
}
