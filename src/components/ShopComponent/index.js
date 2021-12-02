import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./style.css";

const Shop = ({ userConnect }) => {
  if(userConnect){
    const buy = (product, value) => {
      if(product !== ""){
        let inventory = JSON.parse(localStorage.getItem("items"))
        let newValue = JSON.parse(localStorage.getItem("coins")) - value
  
        if(!inventory.includes(product) && !articleBought && JSON.parse(localStorage.getItem("coins")) >= value){
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
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_rouge") ? () => buy("") : () => buy('croix_rouge', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_rouge") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_or") ? () => buy("") : () => buy('croix_or', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_or") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_verte") ? () => buy("") : () => buy('croix_verte', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_verte") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_bleue") ? () => buy("") : () => buy('croix_bleue', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_bleue") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_jaune") ? () => buy("") : () => buy('croix_jaune', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_jaune") ? "Bought" : "Buy"} />
            </div>
          </div>
          <div className="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={JSON.parse(localStorage.getItem("items")).includes("croix_violette") ? () => buy("") : () => buy('croix_violette', 100)} value={JSON.parse(localStorage.getItem("items")).includes("croix_violette") ? "Bought" : "Buy"} />
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
