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

class AppCredits extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
      
                    padding: 10px;
                }
            </style>

            <div class="main">
                <h1>Credit where credit is due!</h1>
                <h2>A shot-out and a special thanks to these awesome open-source projects which made building this site a quick and painless experience:</h2>
      
                <div>
                    <h3>Communities</h3>
                    <ul>
                        <li>StackOverflow Developer Community &ndash; <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/">StackOverflow</a></li>
                        <li>Web Components Community &ndash; <a href="https://www.webcomponents.org/" target="_blank" rel="noopener noreferrer">WEBCOMPONENTS.ORG</a></li>
                    </ul>
                    <h3>Font</h3>
                    <ul>
                        <li>Google Fonts &ndash; <a href="https://fonts.google.com/specimen/Roboto/" target="_blank" rel="noopener noreferrer">Roboto</a></li>
                    </ul>
                    <h3>Images</h3>
                    <ul>
                        <li>Images Source &ndash; <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></li>
                        <li> Poon Hill, Ghode Pani, Nepal &ndash;
                            <a href="https://unsplash.com/@danielleone?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                               target="_blank" rel="noopener noreferrer">Daniel Leone</a>
                        </li>
                    </ul>
                    <h3>Tools</h3>
                    <ul>
                        <li>Polymer Web Component Library &ndash; <a rel="noopener noreferrer" target="_blank" href="https://github.com/Polymer/polymer/">Polymer Library</a></li>
                        <li>PWA Starter Kit &ndash; <a rel="noopener noreferrer" target="_blank" href="https://pwa-starter-kit.polymer-project.org/">Polymer Project</a></li>
                        <li>Node JS &ndash; <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">NodeJS</a></li>
                        <li>NPM Package Manager &ndash; <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a></li>
                        <li>Gulp Development Workflow Automation System &ndash; <a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">GulpJS</a></li>
                        <li>Browsersync Synchronised Browser Testing &ndash; <a href="https://www.browsersync.io/" target="_blank" rel="noopener noreferrer">Browsersync</a></li>
                        <li>Git Version Control &ndash; <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></li>
                        <li>GitHub Software Development Platform &ndash; <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li>WebStorm JavaScript IDE &ndash; <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm</a></li>
                        <li>Coolors Color Palette Generator &ndash; <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer">Coolors</a></li>
                    </ul>
                </div>
      
            </div>
    `;
    }
}

window.customElements.define('app-credits', AppCredits);
