/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
	<template>
		<style>
			.main {
                padding: 1rem 2rem;
                color: #fff;
                background: rgba(0,0,0,.3);
                height: fit-content;
                width: 50%;
                margin: 2rem auto;
                border-radius: 5px;
			}

			.social-media,
			h1,
			h2,
			h3 {
				font-weight: 100;
				font-style: normal;
				text-align: center;
			}

			a,
			a:visited {
				color: #fff;
			}

			h1 {
				color: #fff;
				font-size: 3rem;
				margin: 6rem auto auto;
			}

			h3 {
				margin-top: 3rem;
				text-align: unset;
			}
			
			li {
			    padding: .5rem 0;
			}
			
			@media screen and (max-width: 780px) {
                .main {
                    margin: 2rem;
                    padding: 16px 0;
                    color: #fff;
                    background: unset;
                    height: initial;
                    width: unset;
                    border-radius: unset;
                }
                ul {
                    padding: 0;
                }
                
                li {
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    text-align: center;
                }
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
