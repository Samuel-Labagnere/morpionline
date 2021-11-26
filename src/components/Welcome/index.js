import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const Welcome = () => {
    return(
        <div>
            <h2 style={{textDecoration: 'underline'}}>Welcome to Morpionline!</h2>
            <p style={{fontStyle: 'italic'}}>The best game you'll ever play. <br/>(An MMI associate degree project)</p>
            <br />
            <ButtonComponent type="link" linksTo="/play" value="Start a new game" />
        </div>
    )
}

export default Welcome