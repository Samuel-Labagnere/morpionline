import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./style.css";

const Shop = ({ userConnect }) => {
  if(userConnect){
    const buy = (product, value) => {
      switch(product){
        case 'croix_rouge' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        case 'croix_or' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        case 'croix_verte' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        case 'croix_bleue' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        case 'croix_jaune' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        case 'croix_violette' :
          //pieces -= 100
          localStorage.setItem("coins" , JSON.parse(localStorage.getItem("coins")) - value)
          //Stocker achat
        break;
        default:
        break;
      }
    }

    return (
      <div id="shop">
        <h1>Here is the Shop !</h1>
  
        <div id="articles">
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_rouge', 100)} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_or', 100)} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_verte', 100)} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_bleue', 100)} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_jaune', 100)} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <p>100 coins</p>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_violette', 100)} value="Buy" />
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
