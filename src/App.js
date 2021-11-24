import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomeComponent from "./components/Welcome"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <WelcomeComponent />
        </Route>
        <Route path="/">
          {/* <Error404 /> */}
          ERROR 404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
