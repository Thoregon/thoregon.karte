/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { UIObservingElement, UIElementBuilder }  from '/evolux.ui';

export default class Karte extends UIObservingElement {



    hostStyle() {
        return `    
                display:            block;
                overflow:           auto;
        `;
    }
}

UIObservingElement.define('t-karte', Karte);
