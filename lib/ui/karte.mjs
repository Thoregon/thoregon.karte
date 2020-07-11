/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { UIElement, UIElementBuilder }  from '/evolux.ui';

export default class Karte extends UIElement {


    hostStyle() {
        return `    
                display:            block;
                overflow:           auto;
        `;
    }
}

Karte.defineElement('t-karte');
