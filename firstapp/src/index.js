import React from "react";
import ReactDOM from "react-dom";
import * as x from "./Import Export Practice/code"

ReactDOM.render(
  <ul>
    <li>{x.Addition(5, 7)}</li>
    <li>{x.Multiplication(5, 7)}</li>
    <li>{x.Subtraction(5, 7)}</li>
    <li>{x.Division(5, 7)}</li>
  </ul>, 
  document.getElementById("root")
);
