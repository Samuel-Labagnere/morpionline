import React from 'react'
import ButtonComponent from '../ButtonComponent'
import './style.css'

const RedeemComponent = () => {
    return(
        <div id="redeemComponent">
            <form>
                <h2>Redeem your gift:</h2>
                <label for="code">Code: </label>
                <input type="text" name="code" /><br />
                <ButtonComponent type="submit" value="Redeem" style={{marginTop: "15px"}} />
            </form>
        </div>
    )
}

export default RedeemComponent