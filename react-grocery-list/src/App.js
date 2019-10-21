import React, {Component} from "react"
import "./App.css"


import Header from "./components/Header"
// import Select from "./components/Select"
// import Input from "./components/Input"
import Form from './components/Form'
import List from './components/List'
class App extends Component {
  constructor() {
      super()
        this.state={

        
      }
  }
  
  render() {
    
    return (
      <div className="formstyle">
      <Header />
      <Form />
      <List/>
      </div>
    )
 }
}
export default App
    
    
    
