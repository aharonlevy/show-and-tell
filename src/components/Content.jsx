import React from "react";

function Content(props) {
    const imageSoerce= props.image;
    const text= props.text;
    return (
        <div className="content-container">
            <img src={imageSoerce?imageSoerce:null}  alt="null" />
            <p className="postcard-text">{text?text:null}</p>
        </div>
    )
}

export default Content