import React from 'react'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const Welcome = () => {
    return(
        <div id="home">
            <h2 style={{textDecoration: 'underline'}}>Welcome to Morpionline!</h2>
            <p>A Tic Tac Toe game.<br /><span style={{fontStyle: 'italic'}}>An MMI associate degree project.</span></p>
            <p>Play with a friend on the same device or against the computer !</p>
            <br />
            <ButtonComponent type="link" linksTo="/play" value="Start a new game" />
        </div>
    )
}

export default Welcome
