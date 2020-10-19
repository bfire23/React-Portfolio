import React from "react";



function BioCard(props) {
    return (
        <div className="bioCard" style={{ image: `url(${props.image})` }}>
        {props.children}
      </div>
    )
}



export default BioCard