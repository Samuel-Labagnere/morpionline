import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import ButtonComponent from '../ButtonComponent'
import "./style.css"


const Header = () => {
    const [isUserConnected, setIsUserConnected] = React.useState(false)
    
    return(
        <div id="header">
            <Link id="header-title" to="/"><h1>MORPIONLINE</h1></Link>
            {isUserConnected ? 
                (
                    <div id="header-links">
                        <ButtonComponent type="link" to="/account" value="My account" />
                        <ButtonComponent type="link" id="shop" linksTo="/shop" value="Shop" />
                    </div> 
                ) : (
                    <div id="header-links">
                        <ButtonComponent type="link" id="signin" linksTo="/signin" value="Sign in" />
                        <ButtonComponent type="link" linksTo="/signup" value="Sign up" />
                        
                    </div> 
                )}
        </div>
    )
}

export default Header