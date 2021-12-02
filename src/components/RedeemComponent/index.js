import React from 'react'
import ButtonComponent from '../ButtonComponent'
import './style.css'

const RedeemComponent = ({ userConnect }) => {
    const [code, setCode] = React.useState("")
    const [msg, setMsg] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if(code === ""){
            setMsg("You need to enter a code first.")
        }else if(code !== "" && userConnect){
            setMsg("Code redeemed! (At least, that's how it should work)")
        }else if(code !== "" && !userConnect){
            setMsg("You are not connected, please sign in.")
        }
    }

    return(
        <div id="redeemComponent">
            <form>
                <h2>Redeem your gift:</h2>
                <label for="code">Code: </label>
                <input type="text" name="code" onChange={(e) => setCode(e.target.value)} required /><br />
                <p style={{fontWeight: "bold"}}>{msg}</p>
                <ButtonComponent type="button" onClick={handleSubmit} value="Redeem" style={{marginTop: "15px"}} />
            </form>
        </div>
    )
}

export default RedeemComponent