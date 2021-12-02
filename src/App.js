import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import WelcomeComponent from "./components/Welcome";
import SigninComponent from "./components/SigninComponent";
import SignupComponent from "./components/SignupComponent";
import PlayComponent from "./components/PlayComponent";
import AccountComponent from "./components/AccountComponent";
import ShopComponent from "./components/ShopComponent";
import RedeemComponent from "./components/RedeemComponent";
import Routes from "./components/Routes";
import Error404 from "./components/Error404";
import './App.css';


function App() {
  const [userConnect, setUserConnect] = React.useState(false)
  const [userVictories,setUserVictories] = React.useState(0)
  const [userLosses, setUserLosses] = React.useState(0)
  const [userCoins, setUserCoins] = React.useState(0)

  return (
    <BrowserRouter>
      <Header userConnect={userConnect} />
      <Switch>
        <Route exact path="/">
          <WelcomeComponent />
        </Route>
        <Route exact path="/account">
          <AccountComponent userConnect={userConnect} setUserConnect={setUserConnect} />
        </Route>
        <Route exact path="/signin">
          <SigninComponent setUserConnect={setUserConnect} />
        </Route>
        <Route exact path="/signup">
          <SignupComponent userConnect={userConnect} />
        </Route>
        <Route exact path="/play">
          <PlayComponent userConnect={userConnect} userCoins={userCoins} setUserCoins={setUserCoins} userVictories={userVictories} setUserVictories={setUserVictories} userLosses={userLosses} setUserLosses={setUserLosses} />
        </Route>
        <Route exact path="/shop">
          <ShopComponent userConnect={userConnect} userCoins={userCoins} setUserCoins={setUserCoins} />
        </Route>
        <Route exact path="/redeem">
          <RedeemComponent userConnect={userConnect} />
        </Route>
        <Route exact path="/routes">
          <Routes />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
