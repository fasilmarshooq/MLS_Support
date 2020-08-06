import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light mb-2"
        style={{ backgroundColor: "#87d3f8" }}
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link className="navbar-brand" to="/Admin">
              Mani Laxmi Silks
            </Link>

            <Link className="nav-item nav-link ml-2" to="/Admin/Orders">
              <i className="fa fa-sticky-note-o" aria-hidden="true"></i> Orders
            </Link>
            <Link className="nav-item nav-link ml-2" to="/Admin/AdminHelp">
              <i className="fa fa-sticky-note-o" aria-hidden="true"></i> Help
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default AdminNavBar;
