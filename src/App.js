/* src\App.js */
import React from "react";
import Router from "./Router";
import "./App.css";
import "./assets/css/deflow-template.webflow.css";
import "./assets/font/deflow-template.webflow.css";
import useScrollRestoration from "./components/Effect/RestoreHeightInPage/RestoreHeightInPage.jsx";

function App() {
  useScrollRestoration();

  return (
    <div className="App">
      <Router />
    </div>
    //example
  );
}

export default App;
