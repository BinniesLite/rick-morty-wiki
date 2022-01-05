import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to="/"
        className="justify-content-start ml-4 text-dark text-center ubuntu my-4 text-decoration-none d-flex"
      >
        <h1>Rick & Morty</h1>
        <span className="text-primary"> Wiki </span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end mx-5 fs-5"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink activeClassName="active" to="/" className="nav-link">
            Characters
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/episode" className="nav-link">
            Episodes{" "}
          </NavLink>

          </li>
          <li className="nav-item"> 
          <NavLink to="/location" className="nav-link">
            Locations
          </NavLink>
        
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
