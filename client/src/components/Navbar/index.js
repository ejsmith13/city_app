import React from "react";
import AuthenticationButton from "../AuthenticationBtn";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">RCity</span>
        
        <ul className="nav justify-content-end">
       
          <li className="nav-item">
            <a className="nav-link active text-white" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="/map">
              Map view
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="/list">
              List view
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="/add">
              Add Location
            </a>
          </li>
          <li className="nav-item">
          <AuthenticationButton />
          </li>
          
        </ul>

        
      </nav>
    </div>
  );
};

export default NavBar;
