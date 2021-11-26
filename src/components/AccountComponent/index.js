import React from "react";
import "./style.css";

const Account = () => {
  return (
    <div id="Account">
      <div id="profile-img"></div>

      <div id="player-infos">
        <div id="player-name">
          <h2>The_SamL</h2> {/* Ici importer un element remplaçable par le joueur depuis la boutique */}
        </div>
        <div id="player-stats">
          <p>Temps de jeu : 1500 heures</p> {/* stats du joueur peut peut etre crée un nouveau component pour ça. Idem pour parties perdues et gagnées */}
          <p>Victoires : 2662</p>
          <p>Défaites : 5</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
