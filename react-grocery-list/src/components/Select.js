import React from 'react'

export default function Select() {
    const selectStyleDiv={
        textAlign:"center",
    }
    const selectStyle={
        width:"50%",
        fontSize:"1.5rem"
    }

    const buttonStyle={
        color:"white",
        padding: 0,
        border: "none",
        background: "none",
    }
    return (
            <div style={selectStyleDiv}>
                
                    <select style={selectStyle} value="List" placeholder="Add item">
                        <option value="Items">Items</option>
                        <option value="Items">Items</option>
                    </select>
                    <input  style={buttonStyle} type="submit" value="+" />
                
        </div>
    )
}
           

