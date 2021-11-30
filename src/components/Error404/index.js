import React from 'react'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const Error404 = () => {
    return(
        <div>
            <img src="./error404.png" />
            <h2>ERROR 404</h2>
            <p>Page not found. :/</p>
            <ButtonComponent type="link" linksTo="/" value="Back to home" alt="" />
        </div>
    )
}

export default Error404