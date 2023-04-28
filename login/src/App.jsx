import React from "react";
import Login from "./login";

var isLoggedIn = false;
var userIsReg = true;

const currentTime = new Date(2023, 3, 21, 23).getHours();

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;