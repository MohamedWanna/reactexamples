 import React, { Component } from 'react';
import Table from './Components/TableComposed';
// import './App.css';
// import {Greet} from './Components/Greet'
// import Welcome from './Components/Welcome'
// //import Table from './Components/Table'
//import Table2 from './Components/TableComposed';
// import Hello from './Components/Hello';
// import Table3 from './Components/MyHobbies';
// import Example from './Components/Example';







// function App() {
//    const name="Batman"
//    const name2="Superman"

//   const name='Mohamed'
//   const heading= <h3 className='site-heading'>I am {name}<br/> React JSX:"JavaScript + XML"</h3>
//   const heading2 = React.createElement('h4', {className:'site-heading'} ,' This is React with noJSX')
//   return (
//     <div className="App">
//       {/* <Greet name="Bruce" heroName="Batman">
//         <p>The secret place {name} is the cave under his palace.He is a businessman.</p>
//       </Greet>
//       <Greet name="Clark" heroName="Superman">
//         <button>Actions</button>
//         <p>{name2} is living in farmer in smallville.He is a journaliste.</p>
//       </Greet>
//       <Greet name="Diana" heroName="Wonder Woman">
//         <p>Diana is pretty woman.She is Amazonian</p>
//       </Greet>
//       <Welcome name="Bruce" heroName="Batman" >
//         <p>The secret place {name} is the cave under his palace.He is a businessman.</p>
//       </Welcome>
//       <Welcome name="Clark" heroName="Superman" />
//       <Welcome name="Diana" heroName="Wonder Woman" />
//       <Hello/> */}
      
//       {/* {<div>{heading}</div>} */}
//       {/* <div>{heading2}=<code>const heading2 = React.createElement('h4',{<code>className:'site-heading'</code>} ,' This is React with noJSX')</code></div>
//       <div className='container'>
//         <Table/>
//       </div>*/}
//       {/* <div className='container'>
//         <Table2/>
//       </div> 
//       <div className='container'>
//         <Table3 members='Ahmed,Ali,nidal'>
//           <p>P.S:There are many other in the group I will try to know their hobbies</p>
//         </Table3>
//       </div>
//       <Example example='This is props example'/> */}

//     </div>
//   );
// }
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
      <div className="container">
      <caption style={{ boxSizing:'border-box'}}>Group Table</caption>
      
        <div>
        <Table characterData={characters} />
      </div>
      </div>
    )
  }
}


export default App;
