import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import WelcomeComponent from "./components/Welcome"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomeComponent />
        </Route>
        {/* <Route exact path="/account">
          <Account />
        </Route> */}
        {/* <Route exact path="/signin">
          <Signin />
        </Route> */}
        {/* <Route exact path="/signup">
          <Signup />
        </Route> */}
        {/* <Route exact path="/play">
          <Play />
        </Route> */}
        {/* <Route exact path="/shop">
          <Shop />
        </Route> */}
        <Route path="/">
          {/* <Error404 /> */}
          ERROR 404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
