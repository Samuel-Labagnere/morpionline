import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div id="header">
            <h1>MORPIONLINE</h1>
            <div id="header-links">
                <Link id="signin" to="/signin">Sign-in</Link>
                <Link to="/signup">Sign-up</Link>
            </div>
        </div>
    )
}

export default Header