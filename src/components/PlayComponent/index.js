import React, { useEffect } from 'react'
import Square, { setTimeOver, hasWon } from './Square'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const PlayComponent = () => {

    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isPlayingFriend, setIsPlayingFriend] = React.useState(false);
    const [isPlayingAI, setIsPlayingAI] = React.useState(false);

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

    const Start = (party) => {
        setIsPlaying(true)
        setTimerOn(true)
        if(party === 'friend'){
            setIsPlayingFriend(true)
        }else if(party === 'ai'){
            setIsPlayingAI(true)
        }
    }

    if(!isPlaying){
        return(
            <div id="playComponent">
                <ButtonComponent type="button" onClick={() => Start('friend')} value="Player VS Player" style={{marginBottom: '15px'}} /><br />
                <ButtonComponent type="button" onClick={() => Start('ai')} value="Player VS AI" />
            </div>
        )
    }else{
        if(isPlayingFriend){
            return(
                <div id="playComponent">
                    <p>
                        <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                        {
                            timerDone ? ' Time\'s over!' : ' ' + timer
                        }
                    </p>
                    <Square timeStop={timeStop} party="friend" />
                </div>
            )
        }else if(isPlayingAI){
            return(
                <div id="playComponent">
                    <p>
                        <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                        {
                            timerDone ? ' Time\'s over!' : ' ' + timer
                        }
                    </p>
                    <Square timeStop={timeStop} party="ai" />
                </div>
            )
        }
    }
}

export default PlayComponent