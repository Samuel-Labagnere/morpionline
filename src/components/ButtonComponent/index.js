import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Button = (props) => {
    if(props.type === "button"){
        return <button class="button" onClick={props.onClick}>{props.value}</button>
    }else if(props.type === "link"){
        return <Link id={props.id} class="button" to={props.linksTo}>{props.value}</Link>
    }else if(props.type === "submit"){
        return <input type="submit" class="button" value={props.value} onClick={props.onClick} />
    }
}

export default Button