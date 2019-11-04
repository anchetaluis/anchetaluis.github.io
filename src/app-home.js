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
import '@lrnwebcomponents/social-media-icons/social-media-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './shared-styles.js';


class AppHome extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
				:host {
					display: block;

					padding: 10px;

					--paper-icon-button: {
						width: 3rem;
						height: 3rem;
						margin: 6rem 2rem;
						padding: 0;
					};
				}

				.social-media > a {
					text-decoration: none;
				}
				
				h2 {
				    margin-top: 2em;
				}
            </style>
    
            <div class="main">
                <h1>Web Developer</h1>
                <h2>HTML, CSS, JavaScript, XML, XSLT, SQL</h2>
      
                <div class="social-media">
                    <a href="https://github.com/Lewis1371" rel="noopener noreferrer" tabindex="-1" target="_blank">
                        <paper-icon-button icon="social-media:github"></paper-icon-button>
                    </a>
      
                    <a href="https://www.linkedin.com/in/luisancheta" rel="noopener noreferrer" tabindex="-1" target="_blank">
                        <paper-icon-button icon="social-media:linkedin"></paper-icon-button>
                    </a>
                </div>
            </div>
    `;
    }
}

window.customElements.define('app-home', AppHome);
