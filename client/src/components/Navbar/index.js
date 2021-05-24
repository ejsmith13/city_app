import React, { useState } from "react";
import AuthenticationButton from "../AuthenticationBtn";

const NavBar = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
  const show = showCollapsedMenu ? " show" : "";

  function toggleMenu() {
    setShowCollapsedMenu(!showCollapsedMenu);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">RCity</span>
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span onClick={console.log(showCollapsedMenu)} className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse justify-content-end" + show}
          id="navbarSupportedContent"
        >
          <ul className="nav ">
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
              <AuthenticationButton className="btn btn-primary btn-block" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
