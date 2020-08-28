import React from 'react';

// using function to create a component

// function Greet() {
//     return <h1> Hello Satwinder!!. </h1>
// } 

// same function as above but by using arrow function.
const Greet = (prop) => {
    console.log(prop.children);

    // we cannot change value of props they are immutable
    // example: prop.name="hello" gives error
   return(
        <div>
        <h1>This is a Functional Component in React JS.</h1>
        <h2>Hello {prop.name}.</h2>
         {prop.children}
        
         <hr></hr>
       </div>
    );


}

export default Greet;