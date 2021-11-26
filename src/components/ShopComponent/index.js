import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./style.css";

const Shop = () => {
  return (
    <div id="shop">
      <h1>Here is the Shop !</h1>

      <div id="articles">
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
        <div class="item-box">
          <div id="item-box">
            <h2>NOM ARTICLE</h2>
            <div id="article-img"></div>
            <ButtonComponent id="buy-button" type="button" value=" Acheter Article" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
