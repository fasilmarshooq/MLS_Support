import React from "react";
import {  NavLink } from "react-router-dom";
import { GetCurrentUser } from "../../../Services/userService";
import { LogOut } from "../../../Services/userService";
import { useHistory } from "react-router";

const MainCatalogNavBar = () => {
  const history = useHistory();
  let mainLink = (cssClass) => (
    <NavLink to="/" className={cssClass}>
      <img src="/assets/MainCatalog/images/icons/MLSlogo.png" alt="IMG-LOGO" />
    </NavLink>
  );
  let logoutIcon = (
    <button
      onClick={() => LogOut(history)}
      class="fa fa-sign-out fa-2x header-wrapicon1 dis-block"
      aria-hidden="true"
    />
  );

  return (
    <React.Fragment>
      <header className="header1">
        <div className="container-menu-header">
          <div className="wrap_header">
            {mainLink("logo")}
            {GetCurrentUser() && (
              <div className="header-icons">
                <p>Hello {GetCurrentUser()}</p>
                <span className="linedivide1" />
                {logoutIcon}
              </div>
            )}
          </div>
        </div>

        <div className="wrap_header_mobile">
          {mainLink("logo-mobile")}
          {GetCurrentUser() && (
            <div className="btn-show-menu">
              <div className="header-icons-mobile">{logoutIcon}</div>
            </div>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainCatalogNavBar;
