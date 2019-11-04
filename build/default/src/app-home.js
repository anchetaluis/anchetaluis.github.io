var _templateObject_03a38f90ff5311e9963ccfd3e036af54 = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\">\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\n\t\t\t\t\tpadding: 10px;\n\n\t\t\t\t\t--paper-icon-button: {\n\t\t\t\t\t\twidth: 3rem;\n\t\t\t\t\t\theight: 3rem;\n\t\t\t\t\t\tmargin: 6rem 2rem;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t.social-media > a {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\th2 {\n\t\t\t\t    margin-top: 2em;\n\t\t\t\t}\n            </style>\n    \n            <div class=\"main\">\n                <h1>Web Developer</h1>\n                <h2>HTML, CSS, JavaScript, XML, XSLT, SQL</h2>\n      \n                <div class=\"social-media\">\n                    <a href=\"https://github.com/Lewis1371\" rel=\"noopener noreferrer\" tabindex=\"-1\" target=\"_blank\">\n                        <paper-icon-button icon=\"social-media:github\"></paper-icon-button>\n                    </a>\n      \n                    <a href=\"https://www.linkedin.com/in/luisancheta\" rel=\"noopener noreferrer\" tabindex=\"-1\" target=\"_blank\">\n                        <paper-icon-button icon=\"social-media:linkedin\"></paper-icon-button>\n                    </a>\n                </div>\n            </div>\n    "]);

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
import "../node_modules/@lrnwebcomponents/social-media-icons/social-media-icons.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import './shared-styles.js';

var AppHome =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(AppHome, _PolymerElement);

  function AppHome() {
    babelHelpers.classCallCheck(this, AppHome);
    return babelHelpers.possibleConstructorReturn(this, (AppHome.__proto__ || Object.getPrototypeOf(AppHome)).apply(this, arguments));
  }

  babelHelpers.createClass(AppHome, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_03a38f90ff5311e9963ccfd3e036af54);
    }
  }]);
  return AppHome;
}(PolymerElement);

window.customElements.define('app-home', AppHome);