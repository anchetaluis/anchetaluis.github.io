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
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
    static get template() {
        return html`
            <style>
				:host {
					--app-primary-color: rgba(100, 200, 255, .5);
					--app-secondary-color: #000;
					--app-white-color: #FFFFFF;

					--app-background-gradient-horizontal: linear-gradient(315deg, #4BA3C3 0%, #175676 100%);
					--app-background-gradient-vertical: linear-gradient(-180deg, #223239 0%, #175676 100%);

					--app-drawer-content-container: {
						background: var(--app-background-gradient-vertical);
						color: var(--app-white-color);
						border-right: 1px solid var(--app-white-color);
					};

					display: block;
				}

				app-drawer-layout:not([narrow]) [drawer-toggle] {
					display: none;
				}

				app-header {
					color: var(--app-white-color);
					background: var(--app-background-gradient-horizontal);
					height: 6rem;
				}

				app-header paper-icon-button {
					--paper-icon-button-ink-color: var(--app-white-color);
				}
				
				app-toolbar.tall {
				    height: 100%;
				}

				.drawer-list {
					margin: 0 20px;
				}

				.drawer-list a {
					display: block;
					padding: 0 16px;
					text-decoration: none;
					color: var(--app-white-color);
					line-height: 40px;
				}

				.drawer-list a.iron-selected {
					color: var(--app-white-color);
					font-weight: bold;
				}
			</style>

            <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
  
            <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
  
            <app-drawer-layout fullbleed="" narrow="{{narrow}}">
                <!-- Drawer content -->
                <app-drawer id="drawer" slot="drawer" swipe-open>
                    <app-toolbar>
                        <div main-title>Menu</div>
                        <paper-icon-button icon="my-icons:close" drawer-toggle></paper-icon-button>
                    </app-toolbar>
                    
                    <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                        <a name="app-home" href="[[rootPath]]app-home">Home</a>
                        <a name="credits" href="[[rootPath]]app-credits">Credits</a>
                    </iron-selector>
                </app-drawer>
  
                <!-- Main content -->
                <app-header-layout has-scrolling-region="">
  
                    <app-header slot="header" reveals condenses effects="waterfall blend-background parallax-background">
                        <app-toolbar class="tall">
                            <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
                            <div main-title hidden="[[narrow]]">Luis Ancheta | Web Developer</div>
                            <div condensed-title hidden="[[!narrow]]">Luis Ancheta</div>
                        </app-toolbar>
                    </app-header>
                    
                    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                        <app-home name="app-home"></app-home>
                        <app-credits name="app-credits"></app-credits>
                        <app-404 name="app-404"></app-404>
                    </iron-pages>
                </app-header-layout>
            </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        const pages = ['app-home', 'app-credits'];

        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'home' in that case. And if the page doesn't exist, show 'app-404'.
        if (!page) {
            this.page = 'app-home';
        } else if (pages.indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'app-404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
            case 'app-home':
                import('./app-home.js');
                break;
            case 'app-credits':
                import('./app-credits.js');
                break;
            case 'app-404':
                import('./app-404.js');
                break;
        }
    }
}

window.customElements.define('my-app', MyApp);
