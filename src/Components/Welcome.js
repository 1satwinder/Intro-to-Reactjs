import React, {Component}  from 'react';

// using class to create a component
class welcome extends Component{
    state={
        name: 'satwinder',
        class: 'PUBG Mobile'
    };
    render(){
        return( 
         <div>
        <h1>This is a class component in React JS.</h1>
        <p>Name is: {this.state.name} class is: {this.state.class}</p>
        <h2>Wlcome to the jungle!!!.</h2>         
        <p>{this.props.name}</p> 
         <hr></hr>
         </div>   
            );
    }

}

export default welcome;