import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/login'
import Signup from './pages/signin'

function App() {
  return (<Router>
     <Route exact path='/' component={Login} />
     <Route path='/sign-in' component={Login} />
     <Route path='/sign-up' component={Signup} />
        </Router>
  );

}
export default App;
