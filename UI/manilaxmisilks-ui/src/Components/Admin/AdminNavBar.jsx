import React from "react";
import {  NavLink } from "react-router-dom";
const AdminNavBar = () => {
  return (
    <React.Fragment>
      <header className="header1">
        <div className="container-menu-header">
          <div className="wrap_header">
            <NavLink to="./" className="logo">
              <img
                src="/assets/MainCatalog/images/icons/MLSlogo.png"
                alt="IMG-LOGO"
              />
            </NavLink>

            <div className="header-icons">
              <NavLink to="/Orders" activeStyle={{ fontWeight: "Bold" }}>
                Orders
              </NavLink>

              <span className="linedivide1"></span>

              <NavLink to="/ProductEntry" activeStyle={{ fontWeight: "Bold" }}>
                Products
              </NavLink>
              <span className="linedivide1"></span>

              <NavLink to="/AccessToken" activeStyle={{ fontWeight: "Bold" }}>
                Access Token
              </NavLink>
              <span className="linedivide1"></span>

              <a href="#" className="header-wrapicon1 dis-block">
                <p>Couriers</p>
              </a>
            </div>
          </div>
        </div>
        <div className="wrap_header_mobile">
          <NavLink to="./" className="logo-mobile">
            <img
              src="/assets/MainCatalog/images/icons/MLSlogo.png"
              alt="IMG-LOGO"
            />
          </NavLink>
          <div className="btn-show-menu">
            <div className="header-icons-mobile">
              <NavLink to="/Orders" activeStyle={{ fontWeight: "Bold" }}>
                Orders
              </NavLink>

              <span className="linedivide1"></span>

              <NavLink to="/ProductEntry" activeStyle={{ fontWeight: "Bold" }}>
                Products
              </NavLink>
              <span className="linedivide1"></span>

              <NavLink to="/AccessToken" activeStyle={{ fontWeight: "Bold" }}>
                Access Token
              </NavLink>
              <span className="linedivide1"></span>

              <a href="#" className="header-wrapicon1 dis-block">
                <p>Couriers</p>
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default AdminNavBar;
