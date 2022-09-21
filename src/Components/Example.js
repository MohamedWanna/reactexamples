import React from "react";

function Example (props) {
    // return(
    //     <div>
    //     <h1>Here we are{props.example}</h1>
    //     </div>
    // )
    return (React.createElement('div','h1',"Here we are!"))
}
export default Example