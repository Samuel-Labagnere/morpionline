import React, { useEffect } from 'react'
import Square, { setTimeOver } from './Square'
import ButtonComponent from '../ButtonComponent'
import "./style.css"

const PlayComponent = ({ userConnect }) => {

    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isPlayingFriend, setIsPlayingFriend] = React.useState(false);
    const [isPlayingAI, setIsPlayingAI] = React.useState(false);
    const [isPlayingOffline, setIsPlayingOffline] = React.useState(false)
    const [isPlayingOnline, setIsPlayingOnline] = React.useState(false)

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
        }else if(party === 'offline'){
            setIsPlayingOffline(true)
        }else if(party === 'online'){
            setIsPlayingOnline(true)
        }
    }

    if(!userConnect){
        return(
            <div id="playComponent">
                <p style={{fontWeight: "bold"}}>You are not connected.</p>
                <p>Please Sign In if you already have an account, or Sign Up if you don't.</p>
            </div>
        )
    }else{
        if(!isPlaying){
            return(
                <div id="playComponent">
                    <ButtonComponent type="button" onClick={() => Start('friend')} value="Player VS Player" style={{marginBottom: '15px'}} /><br />
                    <ButtonComponent type="button" onClick={() => Start('ai')} value="Player VS AI" />
                </div>
            )
        }else{
            if(isPlayingFriend){
                if(!isPlayingOffline && !isPlayingOnline){
                    return(
                        <div id="playComponent">
                            <ButtonComponent type="button" onClick={() => Start('offline')} value="Offline" style={{marginBottom: '15px'}} /><br />
                            <ButtonComponent type="button" onClick={() => Start('online')} value="Online" />                 
                        </div>
                    )
                }else if(isPlayingOffline){
                    return(
                        <div id="playComponent">
                            <p>
                                <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                                {
                                    timerDone ? ' Time\'s over!' : ' ' + timer
                                }
                            </p>
                            <Square timeStop={timeStop} party="offline" setIsPlaying={setIsPlaying} setIsPlayingAI={setIsPlayingAI} setIsPlayingFriend={setIsPlayingFriend} setIsPlayingOffline={setIsPlayingOffline} setIsPlayingOnline={setIsPlayingOnline} />
                        </div>
                    )
                }else if(isPlayingOnline){
                    return(
                        <div id="playComponent">
                            <p style={{fontWeight: "bold"}}>Work in progress.</p>
                            <ButtonComponent type="button" onClick={() => setIsPlayingOnline(false)} value="Return" />
                        </div>
                    )
                }
            }else if(isPlayingAI){
                return(
                    <div id="playComponent">
                        <p>
                            <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>TIMER:</span>
                            {
                                timerDone ? ' Time\'s over!' : ' ' + timer
                            }
                        </p>
                        <Square timeStop={timeStop} party="ai" setIsPlaying={setIsPlaying} setIsPlayingAI={setIsPlayingAI} setIsPlayingFriend={setIsPlayingFriend} setIsPlayingOffline={setIsPlayingOffline} setIsPlayingOnline={setIsPlayingOnline} />
                    </div>
                )
            }
        }
    }
}

export default PlayComponent
