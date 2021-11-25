import React, { useEffect } from 'react'
import "./style.css"

const PlayComponent = () => {

    const [isPlaying, setIsPlaying] = React.useState(false);

    const [timer, setTimer] = React.useState(60);
    const [timerOn, setTimerOn] = React.useState(false);
    const [timerDone, setTimerDone] = React.useState(false);
    
    useEffect(() => {
        setTimeout(
            () => {
                if(timerOn){
                    if(timer === 1){
                        setTimer(timer - 1)
                        setTimerDone(true)
                    }else{
                        setTimer(timer - 1)
                    }
                }
            },
            1000 // 1 seconde de délai
        );
    }, [timer, timerOn])

    const Start = () => {
        setIsPlaying(true)
        setTimerOn(true)
    }

    if(!isPlaying){
        return(
            <div id="playComponent">
                <button onClick={Start}>Play</button>
            </div>
        )
    }else{
        return(
            <div id="playComponent">
                <p>
                    <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                    {
                        timerDone ? ' ' + 'Time\'s over!' : ' ' + timer
                    }
                </p>
            </div>
        )
    }
}

export default PlayComponent