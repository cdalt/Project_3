import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" class="navbar-brand">
         Pet Finder
        </Link>
        
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >
               About 
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}



