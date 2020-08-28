import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : 'Get To The Safe Zone',
             topic : ''
        }
        this.refInput= React.createRef();
       

        this.handleChange= this.handleChange.bind(this);
        this.handleSelect= this.handleSelect.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.refInput.current.focus();
       
    }
    
    handleChange(event){
        this.setState({
            username : event.target.value
        })
    }

    handleSelect(event){
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit(event){
        alert(`${this.state.username} loves ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        console.log(this.state.username);
        return (
            <form onSubmit={this.handleSubmit}>
              <input type='text' value={this.state.username} onChange={this.handleChange} ref={this.refInput} />  
              <select value={this.state.topic} onChange={this.handleSelect}>
                  <option value="React" selected>React</option>
                  <option value="Vue">Vue</option>
                  <option value="Angular">Angular</option>
              </select>
                
              <input type='submit' />  
                    
            </form>
        )
    }
}

export default Form;
