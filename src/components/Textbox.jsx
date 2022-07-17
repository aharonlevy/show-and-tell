import React, { useState } from "react";

function Textbox(props) {
    const [textboxValue, setTextboxValue] = useState();

    function handleChange(event){
       setTextboxValue(event.target.value)
    }
    return(
            <input
                className="textbox-basic"
                type="text"
                name={props.textboxName}
                placeholder={props.textboxName}
                value={textboxValue}
                onChange={handleChange}
             />
         );
    
    
}

export default Textbox;