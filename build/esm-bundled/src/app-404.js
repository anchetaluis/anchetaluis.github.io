import{PolymerElement,html}from"./my-app.js";class App404 extends PolymerElement{static get template(){return html`
            <style include="shared-styles">
                :host {
                  display: block;
                  text-align: center;
                }
            </style>

            <div class="main">
                <h1>Error: 404</h1>
                <h2>Not Found</h2>
          
                <p>Oops! The requested page was not found. <a href="[[rootPath]]">Head back to home.</a></p>
            </div>
    `}}window.customElements.define("app-404",App404);