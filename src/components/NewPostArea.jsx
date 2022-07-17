import React from "react";
import Profile from "./Profile";

function NewPostArea(params) {
    return(
        <div className="bar">
            <Profile />
            <button className="post-area">
            Show me something new?
            </button>
        </div>
    )
}

export default NewPostArea;