import React from "react";
import Profile from "./Profile";
import Content from "./Content";

function Postcard(props) {

    return (
        <div className="postcarc-container">
        <Profile/>
        <Content
            imageSoerce= {props.imageSoerce}
            text= {props.contentText}
        />
        </div>

    )

}

export default Postcard;