import React from "react";

function TitleInput(props){
    return (
        <input 
            className="creator-input input-title" 
            name={props.name}
            placeholder={props.placeholder}
            value={props.title}
            onChange={props.handleChange}
            onClick={props.handleTitleClick}
        />
    );
}
export default TitleInput;