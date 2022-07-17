import React from "react";
import Profile from "./Profile";
import Textbox from "./Textbox";

function CrateNewPost(){

    return (
        <post>
            <Profile />
            <Textbox 
                textboxName= "newPost"
            />
        </post>
    )
}

export default CrateNewPost;