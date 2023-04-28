import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setheading] = useState("");

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function changeHeading(event) {
    setheading(name);
    event.preventDefault();
  }

  return (
    <form onSubmit={changeHeading}>
      <div className="container">
        <h1>Hello! {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <button
          type="submit"
          style={isMouseOver ? { backgroundColor: "black" } : null}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
