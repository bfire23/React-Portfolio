import React from "react";
import "./style.css";


function Canyon(props) {
    return (
      <div className="canyon text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
    );
  }
  
  export default Canyon;