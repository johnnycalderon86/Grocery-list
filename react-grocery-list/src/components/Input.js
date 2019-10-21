import React from 'react'

export default function Input() {
    const styleInput={
        borderRadius: "5px",
        position: "relative",
        border: "1px solid black",
        textAlign:"center",
      
          }
    return (
        <div>
            <form className="field">
              <input style={styleInput} type="text" name="itemList" placeholder="add item" onChange={this.handleChange} />
              <input style={styleSubmit}type="submit" value="Add" />

              <br />
              <h4>Adding:{this.state.itemList} </h4>
              </form>
        </div>
    )
}
