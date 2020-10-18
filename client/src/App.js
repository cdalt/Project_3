import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Favorite from"./pages/favorites";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/favorite" component={Favorite}/>
      </Switch>
    </Router>
  );
}
export default App;
