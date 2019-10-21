import React from 'react'

export default function Header() {
    
    const styleHeader ={
        backgroundColor: "black",
        color: "white",
        textAlign:"left",
        display:"inlineBlock",
        padding:""
    }
    const loginButton={
        
    }
    return (
        <header style={styleHeader}>
            
          <h1>Groceries APP <button style={loginButton}>Login</button></h1>
          
        </header>
    )
}
