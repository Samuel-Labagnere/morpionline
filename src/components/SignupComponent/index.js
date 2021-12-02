import React, { useEffect } from "react";
import ButtonComponent from '../ButtonComponent'
import "./style.css";

const SignupComponent = ({ userConnect }) => {
    const [mail, setMail] = React.useState("")
    const [pseudo, setPseudo] = React.useState("")
    const [pass, setPass] = React.useState("")
    
    const [msg, setMsg] = React.useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(mail !== "" && pseudo !== "" && pass !== ""){
            localStorage.setItem("mail", JSON.stringify(mail))
            localStorage.setItem("pseudo", JSON.stringify(pseudo))
            localStorage.setItem("pass", JSON.stringify(pass))
            setMsg(<p style={{color: "green", fontWeight: "bold"}}>Account created.</p>)
        }
    }

    if(!userConnect){
        return(
            <div id="signupComponent">
                <form>
                    {msg}
                    <p style={{fontWeight: "bold"}}>{localStorage.getItem("pseudo") ? "WARNING! You already have an account, creating a new one will erase the current." : "" }</p>
                    <label for="mail">Mail: <span style={{color: 'red'}}>*</span></label><br />
                    <input type="email" name="mail" onChange={(e) => setMail(e.target.value)} required/><br />
    
                    <label for="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                    <input type="text" name="pseudo" onChange={(e) => setPseudo(e.target.value)} required/><br />
    
                    <label for="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                    <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} required/><br />
    
                    <ButtonComponent type="submit" onClick={handleSubmit} style={{marginTop: "20px"}} value="Sign up" />
                </form>
            </div>
        )
    }else{
        <div id="signupComponent">
            <p style={{fontWeight: "bold"}}>You are already connected.</p>
            <p>Please disconnect in your account page before signing up another account.</p>
        </div>
    }
}

export default SignupComponent;