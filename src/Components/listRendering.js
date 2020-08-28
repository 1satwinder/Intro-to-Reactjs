import React from 'react'

function HelloWorld() {

    const names=['John', 'Diana', 'smith', 'woods'];

    // key is used by React to render list efficiently. By checking difference and
    // only update the changes to the DOM.
    // dont use index as a key as used below because it creates problems when list is updated.
    const nameList= names.map( (name,index) => <h3 key={index}>{index} {name}</h3> )
    return (
        <div>
            <h1>List Rendering</h1>
           {nameList}
        </div>
    )
}

export default HelloWorld;
