import React from "react";


let InputField = React.forwardRef((props,ref)=>{
    return (
        <input ref={ref} style={{padding:"10px 20px"}}></input>
    )
})

export default InputField;
