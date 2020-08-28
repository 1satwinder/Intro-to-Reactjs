import React from 'react'

function EventHandlingFunc() {

    function funClick()
    {
        console.log('function click');
    }

    return (
        <div>

           <h1>Function event handling</h1> 
           <button onClick={funClick}>Function Event Handling.</button>     
           <hr></hr>   
        </div>
    )
}

export default EventHandlingFunc
