define(["require", "../node_modules/@polymer/polymer/polymer-element.js", "../node_modules/@polymer/polymer/lib/utils/settings.js", "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js", "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js", "../node_modules/@polymer/app-layout/app-header/app-header.js", "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js", "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js", "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js", "../node_modules/@polymer/app-route/app-location.js", "../node_modules/@polymer/app-route/app-route.js", "../node_modules/@polymer/iron-pages/iron-pages.js", "../node_modules/@polymer/iron-selector/iron-selector.js", "../node_modules/@polymer/paper-icon-button/paper-icon-button.js", "./my-icons.js"], function (_require, _polymerElement, _settings, _appDrawer, _appDrawerLayout, _appHeader, _appHeaderLayout, _appScrollEffects, _appToolbar, _appLocation, _appRoute, _ironPages, _ironSelector, _paperIconButton, _myIcons) {
  "use strict";

  _require = babelHelpers.interopRequireWildcard(_require);

  var _templateObject_d53c5b80026011eaad36b5a5055f60c9 = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n            <style>\n\t\t\t\t:host {\n\t\t\t\t\t--app-primary-color: rgba(100, 200, 255, .5);\n\t\t\t\t\t--app-secondary-color: #000;\n\t\t\t\t\t--app-white-color: #FFFFFF;\n\n\t\t\t\t\t--app-background-gradient-horizontal: linear-gradient(315deg, #4BA3C3 0%, #175676 100%);\n\t\t\t\t\t--app-background-gradient-vertical: linear-gradient(-180deg, #223239 0%, #175676 100%);\n\n\t\t\t\t\t--app-drawer-content-container: {\n\t\t\t\t\t\tbackground: var(--app-background-gradient-vertical);\n\t\t\t\t\t\tcolor: var(--app-white-color);\n\t\t\t\t\t\tborder-right: 1px solid var(--app-white-color);\n\t\t\t\t\t};\n\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\tapp-drawer-layout:not([narrow]) [drawer-toggle] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tapp-header {\n\t\t\t\t\tcolor: var(--app-white-color);\n\t\t\t\t\tbackground: var(--app-background-gradient-horizontal);\n\t\t\t\t\theight: 6rem;\n\t\t\t\t}\n\n\t\t\t\tapp-header paper-icon-button {\n\t\t\t\t\t--paper-icon-button-ink-color: var(--app-white-color);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tapp-toolbar.tall {\n\t\t\t\t    height: 100%;\n\t\t\t\t}\n\n\t\t\t\t.drawer-list {\n\t\t\t\t\tmargin: 0 20px;\n\t\t\t\t}\n\n\t\t\t\t.drawer-list a {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tpadding: 0 16px;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tcolor: var(--app-white-color);\n\t\t\t\t\tline-height: 40px;\n\t\t\t\t}\n\n\t\t\t\t.drawer-list a.iron-selected {\n\t\t\t\t\tcolor: var(--app-white-color);\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t}\n\t\t\t</style>\n\n            <app-location route=\"{{route}}\" url-space-regex=\"^[[rootPath]]\"></app-location>\n  \n            <app-route route=\"{{route}}\" pattern=\"[[rootPath]]:page\" data=\"{{routeData}}\" tail=\"{{subroute}}\"></app-route>\n  \n            <app-drawer-layout fullbleed=\"\" narrow=\"{{narrow}}\">\n                <!-- Drawer content -->\n                <app-drawer id=\"drawer\" slot=\"drawer\" swipe-open>\n                    <app-toolbar>\n                        <div main-title>Menu</div>\n                        <paper-icon-button icon=\"my-icons:close\" drawer-toggle></paper-icon-button>\n                    </app-toolbar>\n                    \n                    <iron-selector selected=\"[[page]]\" attr-for-selected=\"name\" class=\"drawer-list\" role=\"navigation\">\n                        <a name=\"app-home\" href=\"[[rootPath]]app-home\">Home</a>\n                        <a name=\"credits\" href=\"[[rootPath]]app-credits\">Credits</a>\n                    </iron-selector>\n                </app-drawer>\n  \n                <!-- Main content -->\n                <app-header-layout has-scrolling-region=\"\">\n  \n                    <app-header slot=\"header\" reveals condenses effects=\"waterfall blend-background parallax-background\">\n                        <app-toolbar class=\"tall\">\n                            <paper-icon-button icon=\"my-icons:menu\" drawer-toggle></paper-icon-button>\n                            <div main-title hidden=\"[[narrow]]\">Luis Ancheta | Web Developer</div>\n                            <div condensed-title hidden=\"[[!narrow]]\">Luis Ancheta</div>\n                        </app-toolbar>\n                    </app-header>\n                    \n                    <iron-pages selected=\"[[page]]\" attr-for-selected=\"name\" role=\"main\">\n                        <app-home name=\"app-home\"></app-home>\n                        <app-credits name=\"app-credits\"></app-credits>\n                        <app-404 name=\"app-404\"></app-404>\n                    </iron-pages>\n                </app-header-layout>\n            </app-drawer-layout>\n    "]);

  // Gesture events like tap and track generated from touch will not be
  // preventable, allowing for better scrolling performance.
  (0, _settings.setPassiveTouchGestures)(true); // Set Polymer's root path to the same value we passed to our service worker
  // in `index.html`.

  (0, _settings.setRootPath)(MyAppGlobals.rootPath);

  var MyApp =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(MyApp, _PolymerElement);

    function MyApp() {
      babelHelpers.classCallCheck(this, MyApp);
      return babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
    }

    babelHelpers.createClass(MyApp, [{
      key: "_routePageChanged",
      value: function _routePageChanged(page) {
        var pages = ['app-home', 'app-credits']; // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'home' in that case. And if the page doesn't exist, show 'app-404'.

        if (!page) {
          this.page = 'app-home';
        } else if (pages.indexOf(page) !== -1) {
          this.page = page;
        } else {
          this.page = 'app-404';
        } // Close a non-persistent drawer when the page & route are changed.


        if (!this.$.drawer.persistent) {
          this.$.drawer.close();
        }
      }
    }, {
      key: "_pageChanged",
      value: function _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
          case 'app-home':
            new Promise(function (res, rej) {
              return _require.default(['./app-home.js'], res, rej);
            });
            break;

          case 'app-credits':
            new Promise(function (res, rej) {
              return _require.default(['./app-credits.js'], res, rej);
            });
            break;

          case 'app-404':
            new Promise(function (res, rej) {
              return _require.default(['./app-404.js'], res, rej);
            });
            break;
        }
      }
    }], [{
      key: "template",
      get: function get() {
        return (0, _polymerElement.html)(_templateObject_d53c5b80026011eaad36b5a5055f60c9);
      }
    }, {
      key: "properties",
      get: function get() {
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
    }, {
      key: "observers",
      get: function get() {
        return ['_routePageChanged(routeData.page)'];
      }
    }]);
    return MyApp;
  }(_polymerElement.PolymerElement);

  window.customElements.define('my-app', MyApp);
});