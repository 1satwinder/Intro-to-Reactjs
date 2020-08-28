import React, { Component } from 'react'

class ClassHandlingFunc extends Component {
    
    clicked(){
        console.log('Clicked');
        alert("Class Event Handling ");
    }
    
    render() {
        return (

            <div>
                <h1>class event</h1>
                <button onClick={this.clicked}>Class event</button>
                <hr></hr>
            </div>

        )
    }
}

export default ClassHandlingFunc;

