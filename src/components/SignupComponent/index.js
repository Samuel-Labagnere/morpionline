import React from "react";
import "./style.css";

const SignupComponent = () => {
    return(
        <div>
            <form method="post">
                <label for="mail">Mail: <span style={{color: 'red'}}>*</span></label><br />
                <input type="email" name="mail" /><br />

                <label for="pseudo">Pseudo: <span style={{color: 'red'}}>*</span></label><br />
                <input type="text" name="pseudo" /><br />

                <label for="pass">Pass: <span style={{color: 'red'}}>*</span></label><br />
                <input type="password" name="pass" /><br />

                <input type="submit" value="Sign up" /*onClick={Connection}*/ />
            </form>
        </div>
    )
}

export default SignupComponent;