import React, { Component } from 'react'

export class Form extends Component {

constructor(props){
    super(props)
    this.state={
        value:"",
        List:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
  }
handleSubmit(event) {

    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
  }

  handleClick(){

  }

    render() {
    
       
        return (
            
                <form className="formStyle" onSubmit={this.handleSubmit}>
                   
                    <select className="selectStyle" value="List" placeholder="Add item" onChange={this.handleChange}>
                        <option value="Items"></option>
                    </select>
                   
                    <br />
                    <input  className="inputStyle" type="text"  placeholder="Add new item" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input className="buttonSubmit" type="submit" value="+"/>
                    
            
                </form>
            
        )
    }
}

export default Form
