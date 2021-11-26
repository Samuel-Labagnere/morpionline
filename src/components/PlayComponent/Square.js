import React from 'react'
import "./square.css"

const SquareProp = (props) => {
    return (
        <div className="square" onClick={props.onClick}>
        <p>{props.value}</p>
        </div>
    );
}

let timeOver = false
const setTimeOver = (value) => {
    timeOver = value
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const Square = ({timeStop, party}) => {
    const [squareValue, setSquareValue] = React.useState([null, null, null, null, null, null, null, null, null])
    let [currentPlayer, setCurrentPlayer] = React.useState("X")
    const [squareAlreadyClicked, setSquareAlreadyClicked] = React.useState([false, false, false, false, false, false, false, false, false])
    let msg
    const [timeOut, setTimeOut] = React.useState(false)
    const [victory, setVictory] = React.useState(false)
    const [lose, setLose] = React.useState(false)
    const [aiIsPlaying, setAiIsPlaying] = React.useState(false)
    // let timeOver = false

    if(timeOver && !timeOut){
        setTimeOut(true)
    }

    const squareClick = (index) => {
        const value = squareValue
        const squareClicked = squareAlreadyClicked
        if(!timeOut && !victory && !lose && !aiIsPlaying){
            if(squareAlreadyClicked[index] === false){
                squareClicked[index] = true
                setSquareAlreadyClicked(squareClicked)
                value[index] = currentPlayer
                setSquareValue(value)
                check()
            }
            aiPlay()
        }
    }

    const aiPlay = () => {
        const value = squareValue
        const squareClicked = squareAlreadyClicked
        if(party === "ai" && !victory && !lose && !timeOut){
            setAiIsPlaying(true)
            setTimeout(
                () => {
                    let i = getRandomInt(9)
                    while(squareAlreadyClicked[i] === true){
                        i = getRandomInt(9);
                    }
                    squareClicked[i] = true
                    setSquareAlreadyClicked(squareClicked)
                    value[i] = "O"
                    setSquareValue(value)
                    setAiIsPlaying(false)
                },
                1000 // 1 seconde de délai
            );
            check()
        }
    }

    const check = () => {
        const value = squareValue
        let victory1 = value[0] !== null && value[0] === value[1] && value[0] === value[2]
        let victory2 = value[0] !== null && value[0] === value[4] && value[0] === value[8]
        let victory3 = value[0] !== null && value[0] === value[3] && value[0] === value[6]
        let victory4 = value[1] !== null && value[1] === value[4] && value[1] === value[7]
        let victory5 = value[3] !== null && value[3] === value[4] && value[3] === value[5]
        let victory6 = value[6] !== null && value[6] === value[7] && value[6] === value[8]
        let victory7 = value[6] !== null && value[6] === value[4] && value[6] === value[2]
        let victory8 = value[2] !== null && value[2] === value[5] && value[2] === value[8]
        let victoryComplete = victory1 || victory2 || victory3 || victory4 || victory5 || victory6 || victory7 || victory8
        let lost = (value[0] && value[1] && value[2] && value[3] && value[4] && value[5] && value[6] && value[7] && value[8]) !== null
        if(victoryComplete){
            setVictory(true)
            timeStop()
        }else if(!victoryComplete && lost){
            setLose(true)
            timeStop()
        }else if(party !== "ai"){
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        }
    }
 
    if(victory){
        msg = <p>{currentPlayer} won!</p>
    }else if(timeOut){
        msg = <p>Nobody won!</p>
    }else if(lose){
        msg = <p>Everyone lose!</p>
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
