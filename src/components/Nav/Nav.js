import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css"

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
        <style jsx>
          {`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}
        </style>
        <i class="fas fa-bars open fw-bold text-dark"></i>
        <i className="fas fa-times close fw-bold text-dark"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end mx-5 fs-5"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <NavLink activeClassName="active" to="/" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/episode" className="nav-link">
            Episodes{" "}
          </NavLink>
          <NavLink to="/location" className="nav-link">
            Locations
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
