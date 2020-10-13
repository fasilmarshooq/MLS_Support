import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TrackOrder from "./Main/TrackOrder/TrackOrder";
import NotFound from "./Common/NotFound";
import Login from "./Main/Login/Login";
import Orders from "./Admin/Orders";
import LandingPage from "./Main/Landingpage/LandingPage";
import MainCatalog from "./Main/catalog/MainCatalog";
import ProductDetails from "./Main/catalog/ProductDetails/ProductDetails";
import ProductEntry from "./Admin/ProductEntry";
import ProductEntryForm from "./Admin/ProductEntryForm";
import UserRegistrationForm from "./Main/UserRegistration/UserRegistraionForm";
import AccessToken from "./Admin/AccessToken";
import ProtectedRoute from "./Common/ProtectedRoute";

class Body extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Main" component={LandingPage} />
            <Route path="/RegisterUser" component={UserRegistrationForm} />
            <Route exact path="/TrackOrder" component={TrackOrder} />
            <ProtectedRoute
              exact
              path="/ProductEntry"
              component={ProductEntry}
              isAdminModule={true}
            />
            <ProtectedRoute
              exact
              path="/AccessToken"
              component={AccessToken}
              isAdminModule={true}
            />
            <ProtectedRoute
              path="/ProductEntryForm/:Id"
              component={ProductEntryForm}
              isAdminModule={true}
            />
            <ProtectedRoute
              exact
              path="/Orders"
              component={Orders}
              
            />

            <ProtectedRoute exact path="/Products" component={MainCatalog} />
            <ProtectedRoute
              path="/ProductDetails/:Id"
              component={ProductDetails}
            />

            <Route exact path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/Main" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Body;
