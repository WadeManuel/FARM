import { Link } from "react-router-dom"
import { useState } from "react"

function Header(){
    const header='header'
    return(
        <header className={header} >
            <a href="" className="logotipo">React js</a>
            
            <nav className="navbar">
                <div className="togglebtn">

                </div>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/ListUsers">Usuarios</Link>
                    <Link to="#">Productos</Link>
                </div>
            </nav>
           
        </header>
    )
}

export  default Header