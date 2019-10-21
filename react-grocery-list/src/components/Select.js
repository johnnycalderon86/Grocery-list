import React from 'react'

export default function Select() {
    return (
        <div>
             <select value={this.state.value} onChange={this.handleChange}>
            <option value="Items">Items</option>
           
          </select>
        </div>
    )
}
