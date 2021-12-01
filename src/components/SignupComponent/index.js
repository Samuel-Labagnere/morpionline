import React, { useEffect } from "react";
import ButtonComponent from '../ButtonComponent'
import "./style.css";

const SignupComponent = () => {
    const [mail, setMail] = React.useState("")
    const [pseudo, setPseudo] = React.useState("")
    const [pass, setPass] = React.useState("")
    
    const [msg, setMsg] = React.useState("")

    useEffect(() => {
        localStorage.setItem("mail", JSON.stringify(mail))
        localStorage.setItem("pseudo", JSON.stringify(pseudo))
        localStorage.setItem("pass", JSON.stringify(pass))
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(mail !== "" && pseudo !== "" && pass !== ""){
            setMsg(<p style={{color: "green", fontWeight: "bold"}}>Account created.</p>)
        }
    }

    return(
        <div>
            <form>
                {msg}
                <label for="mail">Mail: <span style={{color: 'red'}}>*</span></label><br />
                <input type="email" name="mail" onChange={(e) => setMail(e.target.value)} required/><br />

                <label for="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                <input type="text" name="pseudo" onChange={(e) => setPseudo(e.target.value)} required/><br />

                <label for="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} required/><br />

                <ButtonComponent type="submit" onClick={handleSubmit} value="Sign up" />
            </form>
        </div>
    )
}

export default SignupComponent;