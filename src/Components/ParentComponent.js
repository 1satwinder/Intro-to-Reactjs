import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "parent"
        }
      this.greetParent= this.greetParent.bind(this);
    }

    greetParent(prop){
        alert(`Hello ${this.state.parentName} from ${prop}`);
    }

    render() {
        return (
            <div>
            <ChildComponent greetHandle={this.greetParent}></ChildComponent>
            
            </div>
        )
        
    }
}

export default ParentComponent;
