import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Form from './components/Form';
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    
      <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Footer />




    </div>
    </BrowserRouter>


  );
}



export default App;
