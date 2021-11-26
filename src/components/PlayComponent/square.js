import React from 'react'
import "./square.css"

const SquareProp = (props) => {
    return (
        <button class="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

const Square = (props) => {
    return <SquareProp value={props.value} />
}

export default Square