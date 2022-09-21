import React from "react";


const Hello = () => {
    // return(
    //         <div className="dummyClaas" id='hello'>
    //             <h3>Let's discover more about JSX</h3>
    //         </div>
    // )
    return React.createElement('div','h3',"Let's discover more about JSX")
    
    //return React.createElement('div',{id:"hello",className:'dummyClass'},
    //React.createElement('h3',null,"Let's discover more about JSX"))
}
export default Hello;