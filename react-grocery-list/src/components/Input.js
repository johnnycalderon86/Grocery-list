import React from 'react'

export default function Input() {
    const styleInputDiv={
        textAlign:"center",
          }
    const styleInput={
        width:"50%",
        fontSize:"1em"
    }
    return (
        
        <div style={styleInputDiv}>
              <input  style={styleInput} type="text" name="itemList" placeholder="add item" />
        </div>
    )
}

              
            
