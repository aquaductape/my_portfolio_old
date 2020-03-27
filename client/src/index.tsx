import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import cssVars from "css-vars-ponyfill";
import "focus-visible";
import React from "react";
// import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

cssVars({
  onlyLegacy: true,
  watch: true
});

ReactDOM.render(<App />, document.getElementById("root"));
// const rootElement = document.getElementById("root");
// if (rootElement && rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
