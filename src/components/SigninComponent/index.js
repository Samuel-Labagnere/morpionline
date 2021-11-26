import React from "react"
import ButtonComponent from '../ButtonComponent'
import "./style.css";

const SigninComponent = () => {

    return(
        <div>
            <form method="post">
                <label for="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                <input type="text" name="pseudo" /><br />

                <label for="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                <input type="password" name="pass" /><br />

                <ButtonComponent type="submit" value="Sign in" />
            </form>
        </div>
    )
}

export default SigninComponent;