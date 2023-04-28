import React from "react";
import ReactDOM from "react-dom";
import pi, {double_pi, triple_pi} from "./main"

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>{pi}</li> 
    <li>{triple_pi()}</li>
  </ul>,
  document.getElementById("root")
);

// also can be import by * sign

// like 

// import * as pi from "./main"

// ReactDOM.render(
//   <ul>
//     <li>pi.default</li>
//     <li>pi.double_pi()</li>
//     <li></li>
//   </ul>,
//   document.getElementById("root")
// );
