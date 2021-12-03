import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./style.css";

const Shop = ({ userConnect }) => {
  if(userConnect){
    const buy = (product, value) => {
      if(product !== ""){
        let inventory = JSON.parse(localStorage.getItem("items"))
        let newValue = JSON.parse(localStorage.getItem("coins")) - value
  
        if(!inventory.includes(product) && JSON.parse(localStorage.getItem("coins")) >= value){
          localStorage.setItem("coins" , newValue)
          inventory.push(product)
          localStorage.setItem("items", JSON.stringify(inventory))
      }
    }
  }

    return (
      <div id="shop">
        <h1>Here is the Shop !</h1>
  
        <div id="articles">
          <div className="item-box">
            <div className="item-box">
              <h2>RED CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "red", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>50 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_rouge") ? () => buy("") : () => buy('croix_rouge', 50)} value={JSON.parse(localStorage.getItem("items")).includes("croix_rouge") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div className="item-box">
              <h2>GOLDEN CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "#ffd700", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>1500 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_or") ? () => buy("") : () => buy('croix_or', 1500)} value={JSON.parse(localStorage.getItem("items")).includes("croix_or") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div className="item-box">
              <h2>GREEN CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "green", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_verte") ? () => buy("") : () => buy('croix_verte', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_verte") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div className="item-box">
              <h2>BLUE CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "blue", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_bleue") ? () => buy("") : () => buy('croix_bleue', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_bleue") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div className="item-box">
              <h2>YELLOW CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "yellow", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_jaune") ? () => buy("") : () => buy('croix_jaune', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_jaune") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div className="item-box">
              <h2>PURPLE CROSS</h2>
              <div className="article-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{fontWeight: "bold", fontSize: "92px", color: "purple", textShadow: "0px 0px 1.5px black"}}>X</p></div>
              <p style={{fontWeight: "bold"}}>500 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_violette") ? () => buy("") : () => buy('croix_violette', 500)} value={JSON.parse(localStorage.getItem("items")).includes("croix_violette") ? "Bought" : "Buy"} />
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div id="shop">
        <p style={{fontWeight: "bold"}}>You are not connected.</p>
        <p>Please Sign In if you already have an account, or Sign Up if you don't.</p>
      </div>
    )
  }
}

export default Shop;
