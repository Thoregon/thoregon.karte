/**
 * This is an interface for a Protocol Handler for KARTE
 * subclass or implement all functions
 *
 * @author: Bernhard Lukassen
 */

export default class ProtocolHandler {

    matches(urn) {
        return false;
    }

    async lookup(urn, karte) {
        // implement by subclass
    }
}
