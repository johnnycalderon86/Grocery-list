import React from 'react'

export default function Header() {
    
    const styleHeader ={
        width:"100%",
        
        backgroundColor:"black"

    }
    const loginButton={
        color:"white",
        marginLeft:"30%",
        padding: 0,
        border: "none",
        background: "none",
    }

    const h1={
        backgroundColor: "black",
        color: "white",
        textAlign:"left",
        display:"inline-block",
        marginLeft:"2%"
    }
    return (
        <header style={styleHeader}>
            
          <h1 style={h1}>Groceries APP </h1><button style={loginButton}>Login</button>
          
          
        </header>
    )
}
