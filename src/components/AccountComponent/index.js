import React from "react";
import "./style.css";
import ButtonComponent from "../ButtonComponent";

const Account = ({ userConnect, setUserConnect }) => {
  if(userConnect){
    return (
      <div id="account">
        <div id="profile-img"></div>
        <div id="player-infos">
          <div id="player-name">
            <h2>The_SamL</h2>{" "}
            {/* Ici importer un element remplaçable par le joueur depuis la boutique */}
          </div>
          <div id="player-stats">
            <p>Played time : 1500h</p>{" "}
            {/* stats du joueur peut peut etre crée un nouveau component pour ça. Idem pour parties perdues et gagnées */}
            <p>Victories : 2662</p>
            <p>Losses : 5</p>
            <p>750 coins</p>
          </div>

          <div id="player-setings">
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
              <p>Mail : SamuelYaniLesBG@mmibordeaux.com</p>
              <ButtonComponent type="button" value="Change mail" style={{marginLeft: "15px"}} />
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "baseline"}}>
              <p>Password : xxxxxxxxxx</p>
              <ButtonComponent type="button" value="Change password" style={{marginLeft: "15px"}} />
            </div>
          </div>

          <ButtonComponent type="button" onClick={() => setUserConnect(false)} value="Disconnect" />
        </div>
      </div>
    );
  }else{
    return(
      <div id="account" style={{textAlign: "center"}}>
        <p style={{fontWeight: "bold"}}>You are not connected.</p>
        <p>Please Sign In if you already have an account, or Sign Up if you don't.</p>
      </div>
    )
  }
}

export default Account;
