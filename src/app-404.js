/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import './shared-styles.js';
class App404 extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                  display: block;
                  text-align: center;
                }
            </style>

            <div class="main">
                <h1>Error: 404</h1>
                <h2>Not Found</h2>
          
                <p>Oops! The requested page was not found. <a href="[[rootPath]]">Head back to home.</a></p>
            </div>
    `;
    }
}

window.customElements.define('app-404', App404);
