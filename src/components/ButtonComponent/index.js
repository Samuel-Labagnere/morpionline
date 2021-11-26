import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Button = (props) => {
    if(props.type === "button"){
        return <button className="button" onClick={props.onClick} style={props.style}>{props.value}</button>
    }else if(props.type === "link"){
        return <Link id={props.id} className="button" to={props.linksTo} style={props.style}>{props.value}</Link>
    }else if(props.type === "submit"){
        return <input type="submit" className="button" value={props.value} onClick={props.onClick} style={props.style} />
    }
}

export default Button