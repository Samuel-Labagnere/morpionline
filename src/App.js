import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomeComponent from "./components/Welcome";
import SigninComponent from "./components/SigninComponent";
import SignupComponent from "./components/SignupComponent";
import PlayComponent from "./components/PlayComponent";
import AccountComponent from "./components/AccountComponent";
import ShopComponent from "./components/ShopComponent";
import RedeemComponent from "./components/RedeemComponent";
import Error404 from "./components/Error404";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomeComponent />
        </Route>
        <Route exact path="/account">
          <AccountComponent />
        </Route>
        <Route exact path="/signin">
          <SigninComponent />
        </Route>
        <Route exact path="/signup">
          <SignupComponent />
        </Route>
        <Route exact path="/play">
          <PlayComponent />
        </Route>
        <Route exact path="/shop">
          <ShopComponent />
        </Route>
        <Route exact path="/redeem">
          <RedeemComponent />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
