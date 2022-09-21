import React from "react";

// function Greet () {
//    return(
//         <div>
//            <h1>Hello Mohamed </h1>
//        </div>
//    )
// }
export const Greet = (props) =>{
    console.log(props);
    return(
        <div>
            <h1>{props.name} a.k.a {props.heroName}</h1>            
            {props.children}
        </div>
    ) 
}

//export default Greet 
//the difference is in the import btw named export and default export