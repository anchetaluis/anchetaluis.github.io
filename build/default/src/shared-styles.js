/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import "../node_modules/@polymer/polymer/polymer-element.js";
var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"shared-styles\">\n\t<template>\n\t\t<style>\n\t\t\t.main {\n                padding: 1rem 2rem;\n                color: #fff;\n                background: rgba(0,0,0,.3);\n                height: fit-content;\n                width: 50%;\n                margin: 2rem auto;\n                border-radius: 5px;\n\t\t\t}\n\n\t\t\t.social-media,\n\t\t\th1,\n\t\t\th2,\n\t\t\th3 {\n\t\t\t\tfont-weight: 100;\n\t\t\t\tfont-style: normal;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\ta,\n\t\t\ta:visited {\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\n\t\t\th1 {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tmargin: 6rem auto auto;\n\t\t\t}\n\n\t\t\th3 {\n\t\t\t\tmargin-top: 3rem;\n\t\t\t\ttext-align: unset;\n\t\t\t}\n\t\t\t\n\t\t\tli {\n\t\t\t    padding: .5rem 0;\n\t\t\t}\n\t\t\t\n\t\t\t@media screen and (max-width: 780px) {\n                .main {\n                    margin: 2rem;\n                    padding: 16px 0;\n                    color: #fff;\n                    background: unset;\n                    height: initial;\n                    width: unset;\n                    border-radius: unset;\n                }\n                ul {\n                    padding: 0;\n                }\n                \n                li {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                    text-align: center;\n                }\n\t\t\t}\n\t\t</style>\n\t</template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);