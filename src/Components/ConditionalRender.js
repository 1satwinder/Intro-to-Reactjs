import React, { Component } from 'react';

export class ConditionalRender extends Component {
    
    state={display:false};

    show = () => {
        this.setState({display:true});
    }

    render() {
        // conditional rendering using if else
        let pubg;
        if(this.state.display){
           pubg = <h1>Lets Play Pubg.</h1>
        }
        {
            pubg = <h1>Do noT play Pubg.</h1>
        }
        return (
            <div>
                <button onClick={this.show}>Click to print data.</button>
                { this.state.display ?
                    <div>
                        <h3>Name is pubg mobile.</h3>
                        <p>Engineer nahi kiya to kya kiya.</p>
                        <p>Print hello world.</p>
                       
                    </div>: null
                    }
                {pubg}    
            </div>
        )
    }
}
export default ConditionalRender;
