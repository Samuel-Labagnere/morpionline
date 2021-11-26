import React, { useEffect } from 'react'
import Square, { setTimeOver, hasWon } from './Square'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const PlayComponent = () => {

    const [isPlaying, setIsPlaying] = React.useState(false);

    const [timer, setTimer] = React.useState(1000);
    const [timerOn, setTimerOn] = React.useState(false);
    const [timerDone, setTimerDone] = React.useState(false);
    
    useEffect(() => {
        setTimeout(
            () => {
                if(timerOn){
                    if(timer === 1){
                        setTimer(timer - 1)
                        setTimerDone(true)
                        setTimeOver(true)
                    }else{
                        setTimer(timer - 1)
                    }
                }
            },
            1000 // 1 seconde de délai
        );
    }, [timer, timerOn])

    const timeStop = () => {
        setTimerOn(false)
    }

    const Start = () => {
        setIsPlaying(true)
        setTimerOn(true)
    }

    if(!isPlaying){
        return(
            <div id="playComponent">
                <ButtonComponent type="button" onClick={Start} value="Play" />
            </div>
        )
    }else{
        return(
            <div id="playComponent">
                <p>
                    <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                    {
                        timerDone ? ' Time\'s over!' : ' ' + timer
                    }
                </p>
                <Square timeStop={timeStop} />
            </div>
        )
    }
}

export default PlayComponent