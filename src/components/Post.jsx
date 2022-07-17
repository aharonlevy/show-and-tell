import React from "react";
import Profile from "./Profile";
import Textbox from "./Textbox";

function Post(){
    return (
        <post>
            <Profile />
            <Textbox 
                textboxName= "newPost"
            />
        </post>
    )
}

export default Post;