import React from 'react'
import ButtonComponent from '../ButtonComponent'
import './style.css'

const RedeemComponent = ({ userConnect }) => {
    const [code, setCode] = React.useState("")
    const [msg, setMsg] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userConnect){
            if(code === ""){
                setMsg("You need to enter a code first.")
            }else{
                let itemList = JSON.parse(localStorage.getItem("items"))
                switch(code){
                    case 'goldenCrossFREE':
                        if(itemList.includes("golden_cross")){
                            setMsg("Error! You already possess the item you are trying to redeem.")
                        }else{
                            setMsg("Congrats! You won a free GOLDEN CROSS cosmetic!")
                            itemList.push("golden_cross")
                            localStorage.setItem("items", JSON.stringify(itemList))
                        }
                    break
                    default:
                        setMsg("Wrong code.")
                    break
                }
            }
        }else{
            setMsg("You are not connected, please sign in.")
        }
    }

    return(
        <div id="redeemComponent">
            <form>
                <h2>Redeem your gift:</h2>
                <label htmlFor="code">Code: </label>
                <input type="text" name="code" onChange={(e) => setCode(e.target.value)} required /><br />
                <p style={{fontWeight: "bold"}}>{msg}</p>
                <ButtonComponent type="button" onClick={handleSubmit} value="Redeem" style={{marginTop: "15px"}} />
            </form>
        </div>
    )
}

export default RedeemComponent