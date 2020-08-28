import React from 'react';

function ChildComponent(props) {
     console.log(props);
    return (
        <div>
            <h1>Child communicate with parent.</h1>
            
            {/* used arrow function becuase we have passed an argument to method call */}
            <button onClick={() => props.greetHandle("child")}>Click to call parent function</button>
            
            <hr></hr>
        </div>
    )
}

export default ChildComponent;
