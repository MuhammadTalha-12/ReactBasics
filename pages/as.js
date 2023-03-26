 
import React from "react";
import { Component } from "react";
export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
   export function Bio() {
    return (
      <div>
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br /><br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }
  
  
//   export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }

export class Parentcomponent extends Component{
  render()
  {
    return(
      <div>
        <h1>I am the Parent Compomnet :</h1> 
        <h3><Childcomponet text="1st component"/></h3>
        <h3><Childcomponet text="2st component"/></h3>
        <h3><Childcomponet text="3st component"/></h3>
      </div>

    );
  }
}
   
 export  const Childcomponet=(props)=>{
    return(
      <p>{props.text}</p>


    );
  }
   

//  export  class Test extends React.Component{    
//     constructor() {    
//         this.state = {      
//             id: 1,      
//             name: "test"    
//         };  
//     }    
    
//     render() {    
//         return (      
//             <div>        
//               <p>{this.state.id}</p>        
//               <p>{this.state.name}</p>      
//             </div>    
//         );  
//     }
// }


 // export default Childcomponet;
  