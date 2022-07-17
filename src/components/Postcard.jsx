import React from "react";
import Profile from "./Profile";
import Content from "./Content";

function Postcard(props) {
    let text= props.contentText

    if(text.length<200){
        text=text.slice(0,200);
    };
    
    return (
        <div className="postcard-container">
        <Profile/>
        <Content
            imageSoerce= {props.imageSoerce}
            text= {text}
        />
        </div>

    )

}

export default Postcard;