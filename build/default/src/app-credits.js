var _templateObject_c42d0770ff5111e9a614c15c27194bff = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\">\n                :host {\n                    display: block;\n      \n                    padding: 10px;\n                }\n            </style>\n\n            <div class=\"main\">\n                <h1>Credit where credit is due!</h1>\n                <h2>A shout-out and a special thanks to these awesome open-source projects which made building this site a quick and painless experience:</h2>\n      \n                <div>\n                    <h3>Communities</h3>\n                    <ul>\n                        <li>StackOverflow Developer Community &ndash; <a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://stackoverflow.com/\">StackOverflow</a></li>\n                        <li>Web Components Community &ndash; <a href=\"https://www.webcomponents.org/\" target=\"_blank\" rel=\"noopener noreferrer\">WEBCOMPONENTS.ORG</a></li>\n                    </ul>\n                    <h3>Font</h3>\n                    <ul>\n                        <li>Google Fonts &ndash; <a href=\"https://fonts.google.com/specimen/Roboto/\" target=\"_blank\" rel=\"noopener noreferrer\">Roboto</a></li>\n                    </ul>\n                    <h3>Images</h3>\n                    <ul>\n                        <li>Images Source &ndash; <a href=\"https://unsplash.com\" target=\"_blank\" rel=\"noopener noreferrer\">Unsplash</a></li>\n                        <li> Poon Hill, Ghode Pani, Nepal &ndash;\n                            <a href=\"https://unsplash.com/@danielleone?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"\n                               target=\"_blank\" rel=\"noopener noreferrer\">Daniel Leone</a>\n                        </li>\n                    </ul>\n                    <h3>Tools</h3>\n                    <ul>\n                        <li>Polymer Web Component Library &ndash; <a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://github.com/Polymer/polymer/\">Polymer Library</a></li>\n                        <li>PWA Starter Kit &ndash; <a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://pwa-starter-kit.polymer-project.org/\">Polymer Project</a></li>\n                        <li>Node JS &ndash; <a href=\"https://nodejs.org/\" target=\"_blank\" rel=\"noopener noreferrer\">NodeJS</a></li>\n                        <li>NPM Package Manager &ndash; <a href=\"https://www.npmjs.com/\" target=\"_blank\" rel=\"noopener noreferrer\">NPM</a></li>\n                        <li>Gulp Development Workflow Automation System &ndash; <a href=\"https://gulpjs.com/\" target=\"_blank\" rel=\"noopener noreferrer\">GulpJS</a></li>\n                        <li>Browsersync Synchronised Browser Testing &ndash; <a href=\"https://www.browsersync.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Browsersync</a></li>\n                        <li>Git Version Control &ndash; <a href=\"https://git-scm.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Git</a></li>\n                        <li>GitHub Software Development Platform &ndash; <a href=\"https://github.com/\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></li>\n                        <li>WebStorm JavaScript IDE &ndash; <a href=\"https://www.jetbrains.com/webstorm/\" target=\"_blank\" rel=\"noopener noreferrer\">WebStorm</a></li>\n                        <li>Coolors Color Palette Generator &ndash; <a href=\"https://coolors.co/\" target=\"_blank\" rel=\"noopener noreferrer\">Coolors</a></li>\n                    </ul>\n                </div>\n      \n            </div>\n    "]);

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import './shared-styles.js';

var AppCredits =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(AppCredits, _PolymerElement);

  function AppCredits() {
    babelHelpers.classCallCheck(this, AppCredits);
    return babelHelpers.possibleConstructorReturn(this, (AppCredits.__proto__ || Object.getPrototypeOf(AppCredits)).apply(this, arguments));
  }

  babelHelpers.createClass(AppCredits, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_c42d0770ff5111e9a614c15c27194bff);
    }
  }]);
  return AppCredits;
}(PolymerElement);

window.customElements.define('app-credits', AppCredits);