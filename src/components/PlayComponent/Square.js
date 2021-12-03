import React from 'react'
import ButtonComponent from '../ButtonComponent'
import "./square.css"

const SquareProp = (props) => {
    return (
        <div id={props.id} className="square" onClick={props.onClick}>
        <p style={{color: props.style, fontWeight: "bold", textShadow: "0px 0px 1.5px black"}} >{props.value}</p>
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

const Square = ({timeStop, party, setIsPlaying, setIsPlayingAI, setIsPlayingFriend, setIsPlayingOffline, setIsPlayingOnline}) => {
    const [squareValue, setSquareValue] = React.useState([null, null, null, null, null, null, null, null, null])
    const [squareStyle, setSquareStyle] = React.useState(["", "", "", "", "", "", "", "", ""])
    let style = ""
    if(JSON.parse(localStorage.getItem("selection"))){
        switch(JSON.parse(localStorage.getItem("selection"))){
            case 'croix_rouge' : 
                style = "red"
            break
            case 'croix_or' : 
                style = "#ffd700"
            break
            case 'croix_verte' : 
                style = "green"
            break
            case 'croix_bleue' : 
                style = "blue"
            break
            case 'croix_jaune' : 
                style = "yellow"
            break
            case 'croix_violette' : 
                style = "purple"
            break
            default:
                style = ""
            break
        }
    }
    let [currentPlayer, setCurrentPlayer] = React.useState("X")
    const [winner, setWinner] = React.useState("")
    const [squareAlreadyClicked, setSquareAlreadyClicked] = React.useState([false, false, false, false, false, false, false, false, false])
    let msg
    const [timeOut, setTimeOut] = React.useState(false)
    const [victory, setVictory] = React.useState(false)
    const [lose, setLose] = React.useState(false)
    const [aiIsPlaying, setAiIsPlaying] = React.useState(false)
    let aiCanPlay = false
    // let timeOver = false

    if(timeOver && !timeOut){
        setTimeOut(true)
    }

    const squareClick = (index) => {
        const value = squareValue
        const color = squareStyle
        const squareClicked = squareAlreadyClicked
        if(!timeOut && !victory && !lose && !aiIsPlaying){
            if(squareAlreadyClicked[index] === false){
                squareClicked[index] = true
                setSquareAlreadyClicked(squareClicked)
                value[index] = currentPlayer
                setSquareValue(value)
                if(currentPlayer === "X"){
                    color[index] = style
                    setSquareStyle(color)
                }
                check()
            }
            aiPlay()
        }
    }

    const aiPlay = () => {
        const value = squareValue
        const squareClicked = squareAlreadyClicked
        setTimeout(
            () => {
                if(party === "ai" && !victory && !lose && !timeOut && aiCanPlay){
                    setAiIsPlaying(true)
                    let i = getRandomInt(9)
                    while(squareAlreadyClicked[i] === true){
                        i = getRandomInt(9);
                    }
                    squareClicked[i] = true
                    setSquareAlreadyClicked(squareClicked)
                    value[i] = "O"
                    setSquareValue(value)
                    setAiIsPlaying(false)
                    check()
                    aiCanPlay = false
                }
            },
            1000 // 1 seconde de délai
        );
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
            if(victory1){
                setWinner(value[0] === "X" ? "X" : "O")
                if(value[0] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square0").setAttribute('style', 'color: red;')
                document.querySelector("#square1").setAttribute('style', 'color: red;')
                document.querySelector("#square2").setAttribute('style', 'color: red;')
            }else if(victory2){
                setWinner(value[0] === "X" ? "X" : "O")
                if(value[0] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square0").setAttribute('style', 'color: red;')
                document.querySelector("#square4").setAttribute('style', 'color: red;')
                document.querySelector("#square8").setAttribute('style', 'color: red;')
            }else if(victory3){
                setWinner(value[0] === "X" ? "X" : "O")
                if(value[0] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square0").setAttribute('style', 'color: red;')
                document.querySelector("#square3").setAttribute('style', 'color: red;')
                document.querySelector("#square6").setAttribute('style', 'color: red;')
            }else if (victory4){
                setWinner(value[1] === "X" ? "X" : "O")
                if(value[1] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square1").setAttribute('style', 'color: red;')
                document.querySelector("#square4").setAttribute('style', 'color: red;')
                document.querySelector("#square7").setAttribute('style', 'color: red;')
            }else if(victory5){
                setWinner(value[3] === "X" ? "X" : "O")
                if(value[3] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square3").setAttribute('style', 'color: red;')
                document.querySelector("#square4").setAttribute('style', 'color: red;')
                document.querySelector("#square5").setAttribute('style', 'color: red;')
            }else if(victory6){
                setWinner(value[6] === "X" ? "X" : "O")
                if(value[6] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square6").setAttribute('style', 'color: red;')
                document.querySelector("#square7").setAttribute('style', 'color: red;')
                document.querySelector("#square8").setAttribute('style', 'color: red;')
            }else if(victory7){
                setWinner(value[6] === "X" ? "X" : "O")
                if(value[6] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square6").setAttribute('style', 'color: red;')
                document.querySelector("#square4").setAttribute('style', 'color: red;')
                document.querySelector("#square2").setAttribute('style', 'color: red;')
            }else if(victory8){
                setWinner(value[2] === "X" ? "X" : "O")
                if(value[2] === "X"){
                    localStorage.setItem("victories" , JSON.parse(localStorage.getItem("victories")) + 1)
                    localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) + 10)
                }else{
                    localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
                }
                document.querySelector("#square2").setAttribute('style', 'color: red;')
                document.querySelector("#square5").setAttribute('style', 'color: red;')
                document.querySelector("#square8").setAttribute('style', 'color: red;')
            }
        }else if(!victoryComplete && lost){
            setLose(true)
            timeStop()
            localStorage.setItem("losses" , JSON.parse(localStorage.getItem("losses")) + 1)
        }else if(party !== "ai"){
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        }else{
            aiCanPlay = true
        }
    }

    const setAllFalse = () => {
        setCurrentPlayer("X")
        setIsPlaying(false)
        setIsPlayingAI(false)
        setIsPlayingFriend(false)
        setIsPlayingOffline(false)
        setIsPlayingOnline(false)
    }
 
    if(victory){
        msg = <p>{winner} won!</p>
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
                <SquareProp id="square0" value={squareValue[0]} style={squareStyle[0]} onClick={() => squareClick(0)} />
                <SquareProp id="square1" value={squareValue[1]} style={squareStyle[1]} onClick={() => squareClick(1)} />
                <SquareProp id="square2" value={squareValue[2]} style={squareStyle[2]} onClick={() => squareClick(2)} />
            </div>
            <div className="div-row">
                <SquareProp id="square3" value={squareValue[3]} style={squareStyle[3]} onClick={() => squareClick(3)} />
                <SquareProp id="square4" value={squareValue[4]} style={squareStyle[4]} onClick={() => squareClick(4)} />
                <SquareProp id="square5" value={squareValue[5]} style={squareStyle[5]} onClick={() => squareClick(5)} />
            </div>
            <div className="div-row last-div">
                <SquareProp id="square6" value={squareValue[6]} style={squareStyle[6]} onClick={() => squareClick(6)} />
                <SquareProp id="square7" value={squareValue[7]} style={squareStyle[7]} onClick={() => squareClick(7)} />
                <SquareProp id="square8" value={squareValue[8]} style={squareStyle[8]} onClick={() => squareClick(8)} />
            </div>
            {victory || lose || timeOut ? <ButtonComponent type="button" value="Replay" onClick={setAllFalse} /> : ''}
        </div>
    )
}

export default Square
export { Square, setTimeOver }
