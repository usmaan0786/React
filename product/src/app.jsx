import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const[Time, updateTime] = useState(time)

function getTime(){
  let time = new Date().toLocaleTimeString();
  updateTime(time)
}

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
