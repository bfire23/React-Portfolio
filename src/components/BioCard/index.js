import React from "react";
import "./style.css";



function BioCard(props) {
    return (
        <div className="bioCard">
         <img alt={props.name} src={props.image} />   
      </div>
    )
}



export default BioCard