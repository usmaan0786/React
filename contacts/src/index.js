import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>

      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phoneNumber}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Contacts</h1>
    <Card
      name="Usman"
      img="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      phoneNumber="03369589172"
      email="usmanmanzoor1000@gmail.com"
    />
    <Card
      name="Umer"
      img="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      phoneNumber="03369589172"
      email="umermanzoor1000@gmail.com"
    />

    
  </div>,
  document.getElementById("root")
);
