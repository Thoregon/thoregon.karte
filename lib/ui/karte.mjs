/**
 *
 *
 * @author: Bernhard Lukassen
 */

import AuroraElement            from "/thoregon.aurora";

export default class Karte extends AuroraElement {


    hostStyle() {
        return `    
                display:            block;
                overflow:           auto;
        `;
    }
}

Karte.defineElement('t-karte');
