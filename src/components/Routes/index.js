import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Routes = () => {
    return(
        <div id="routes">
            <h2>Routes:</h2>
            <ul>
                <li><Link to="/">Home: /</Link></li>
                <li><Link to="/account">My account: /account</Link></li>
                <li><Link to="/signin">Sign in: /signin</Link></li>
                <li><Link to="/signup">Sign up: /signup</Link></li>
                <li><Link to="/play">Play: /play</Link></li>
                <li><Link to="/shop">Shop: /shop</Link></li>
                <li><Link to="/redeem">Redeem your gift: /redeem</Link></li>
                <li><Link to="/routes">Routes: /routes</Link></li>
            </ul>
        </div>
    )
}

export default Routes