import React from 'react'
import "./square.css"

const SquareProp = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

let timeOver = false
const setTimeOver = (value) => {
    timeOver = value
}

const Square = () => {
    const [squareValue, setSquareValue] = React.useState([null, null, null, null, null, null, null, null, null])
    let [currentPlayer, setCurrentPlayer] = React.useState("X")
    let msg
    const [timeOut, setTimeOut] = React.useState(false)
    const [victory, setVictory] = React.useState(false)
    // let timeOver = false

    if(timeOver && !timeOut){
        setTimeOut(true)
    }

    const squareClick = (index) => {
        const value = squareValue
        if(!timeOut && !victory){
            value[index] = currentPlayer
            setSquareValue(value)
            setCurrentPlayer(currentPlayer == "X" ? "O" : "X")
        }
        // console.log(typeof null)
        // console.log(typeof value[0] + ' ' + typeof value[1] + ' ' + typeof value[2])
        // console.log(value[0] + ' ' + value[1] + ' ' + value[2])
        console.log(typeof value[0])
        console.log('null ' + (value[0] ==! null))
        console.log('0-1 ' + (value[0] === value[1]))
        console.log('0-2 ' + (value[0] === value[2]))
        if(value[0] ==! null && value[0] === value[1] && value[0] === value[2]){
            console.log("hey")
        }
    }

    if(victory){
        msg = <p>{currentPlayer} won!</p>
    }else if(timeOut){
        msg = <p>Nobody won!</p>
    }else{
        msg = <p>Current player: {currentPlayer}</p>
    }

    return (
        <div>
            {msg}
            <div className="div-row">
                <SquareProp value={squareValue[0]} onClick={() => squareClick(0)} />
                <SquareProp value={squareValue[1]} onClick={() => squareClick(1)} />
                <SquareProp value={squareValue[2]} onClick={() => squareClick(2)} />
            </div>
            <div className="div-row">
                <SquareProp value={squareValue[3]} onClick={() => squareClick(3)} />
                <SquareProp value={squareValue[4]} onClick={() => squareClick(4)} />
                <SquareProp value={squareValue[5]} onClick={() => squareClick(5)} />
            </div>
            <div className="div-row">
                <SquareProp value={squareValue[6]} onClick={() => squareClick(6)} />
                <SquareProp value={squareValue[7]} onClick={() => squareClick(7)} />
                <SquareProp value={squareValue[8]} onClick={() => squareClick(8)} />
            </div>
        </div>
    )
}

export default Square
export { Square, setTimeOver }