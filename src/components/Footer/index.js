import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const Footer = () => {
    return(
        <div id="footer">
            <Link to="/routes">Routes</Link>
            <p>Morpionline © COPYRIGHT 2021</p>
        </div>
    )
}

export default Footer