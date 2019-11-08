define(["../node_modules/@polymer/polymer/polymer-element.js", "./shared-styles.js"], function (_polymerElement, _sharedStyles) {
  "use strict";

  var _templateObject_d53de220026011eaad36b5a5055f60c9 = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\">\n                :host {\n                  display: block;\n                  text-align: center;\n                }\n            </style>\n\n            <div class=\"main\">\n                <h1>Error: 404</h1>\n                <h2>Not Found</h2>\n          \n                <p>Oops! The requested page was not found. <a href=\"[[rootPath]]\">Head back to home.</a></p>\n            </div>\n    "]);

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
        return (0, _polymerElement.html)(_templateObject_d53de220026011eaad36b5a5055f60c9);
      }
    }]);
    return App404;
  }(_polymerElement.PolymerElement);

  window.customElements.define('app-404', App404);
});