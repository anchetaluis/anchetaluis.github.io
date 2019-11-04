var _templateObject_b3e30880ff5e11e9a11e5718f8a4c9dc = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\">\n                :host {\n                  display: block;\n                  text-align: center;\n                }\n            </style>\n\n            <div class=\"main\">\n                <h1>Error: 404</h1>\n                <h2>Not Found</h2>\n          \n                <p>Oops! The requested page was not found. <a href=\"[[rootPath]]\">Head back to home.</a></p>\n            </div>\n    "]);

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

var App404 =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(App404, _PolymerElement);

  function App404() {
    babelHelpers.classCallCheck(this, App404);
    return babelHelpers.possibleConstructorReturn(this, (App404.__proto__ || Object.getPrototypeOf(App404)).apply(this, arguments));
  }

  babelHelpers.createClass(App404, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_b3e30880ff5e11e9a11e5718f8a4c9dc);
    }
  }]);
  return App404;
}(PolymerElement);

window.customElements.define('app-404', App404);