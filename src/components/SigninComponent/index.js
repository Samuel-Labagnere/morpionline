import React from "react"
import "./style.css";

const SigninComponent = () => {

    return(
        <div>
            <form method="post">
                <label for="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                <input type="text" name="pseudo" /><br />

                <label for="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                <input type="password" name="pass" /><br />

                <input type="submit" value="Sign in" /*onClick={Connection}*/ />
            </form>
        </div>
    )
}

export default SigninComponent;