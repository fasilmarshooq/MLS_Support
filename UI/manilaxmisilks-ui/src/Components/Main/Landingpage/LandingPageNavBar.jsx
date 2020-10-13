import React from "react";
import { Link, NavLink } from "react-router-dom";
const LandingPagenavBar = ({ show, toggleAction }) => {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          <Link className="navbar-brand" to="./">
            <strong>Mani Laxmi Silks</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleAction}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={"collapse navbar-collapse " + show}>
            <ul className="navbar-nav mr-auto" />

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <NavLink className="nav-link" to="./Products">
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/TrackOrder">
                  Track My Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default LandingPagenavBar;
