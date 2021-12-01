import React from "react"
import ButtonComponent from '../ButtonComponent'
import "./style.css";

const SigninComponent = ({ setUserConnect }) => {
    const [pseudo, setPseudo] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [msg, setMsg] = React.useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(pseudo !== "" && pass !== ""){
            if(JSON.stringify(pseudo) === localStorage.getItem("pseudo") && JSON.stringify(pass) === localStorage.getItem("pass")){
                // Connect User in Header component
                setUserConnect(true)
                setMsg(<p style={{color: "green", fontWeight: "bold"}}>Connection success!</p>)
            }else{
                setMsg(<p style={{color: "red", fontWeight: "bold"}}>Pseudo or Pass incorrect.</p>)
            }
        }
    }

    return(
        <div>
            <form>
                {msg}
                <label htmlFor="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                <input type="text" name="pseudo" onChange={(e) => setPseudo(e.target.value)} required/><br />

                <label htmlFor="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} required/><br />

                <ButtonComponent type="button" onClick={handleSubmit} value="Sign in" />
            </form>
        </div>
    )
}

export default SigninComponent;