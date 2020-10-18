import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Navbar } from "react-bootstrap";
import Login from "./components/Login/login.component";
import SignUp from "./components/SignUp/signup.component";


import Home from "./pages/home";
import About from "./pages/about";
// import Login from "./pages/login";
// import Signup from "./pages/signin";

=======
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Favorite from"./pages/favorites";
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
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
