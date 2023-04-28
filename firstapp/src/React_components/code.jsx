import React from "react";


function code(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    
    let message;
    if (hours < 12 && hours >= 0) {
      message = "Good Morning!!!"
    }
    else if(hours > 12 && hours <= 18 ){
      message = "Good Afternoon"
    }
    else if(hours > 18 && hours <= 24 ){
      message = "Good Evening"
    }

    return <div>
      <h1 className="heading">{message}</h1>
    </div>
}

export default code;

