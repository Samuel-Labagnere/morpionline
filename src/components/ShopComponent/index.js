import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./style.css";

const Shop = ({ userConnect }) => {
  const buy = (product) => {
    switch(product){
      case 'croix_rouge' :
        //pieces -= 100
        //Stocker achat
      break;
      case 'croix_or' :
        //pieces -= 100
        //Stocker achat
      break;
      case 'croix_verte' :
        //pieces -= 100
        //Stocker achat
      break;
      case 'croix_bleue' :
        //pieces -= 100
        //Stocker achat
      break;
      case 'croix_jaune' :
        //pieces -= 100
        //Stocker achat
      break;
      case 'croix_violette' :
        //pieces -= 100
        //Stocker achat
      break;
      default:
      break;
    }
  }

  if(userConnect){
    return (
      <div id="shop">
        <h1>Here is the Shop !</h1>
  
        <div id="articles">
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_rouge')} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_or')} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_verte')} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_bleue')} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_jaune')} value="Buy" />
            </div>
          </div>
          <div class="item-box">
            <div id="item-box">
              <h2>NOM ARTICLE</h2>
              <div id="article-img"></div>
              <ButtonComponent id="buy-button" type="button" onClick={() => buy('croix_violette')} value="Buy" />
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
