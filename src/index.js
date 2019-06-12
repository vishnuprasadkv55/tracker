import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// in Home.js you can change the state 'track' inorder to change status of this completely reusable component
