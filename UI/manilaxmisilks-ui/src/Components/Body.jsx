import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main/Main";
import NotFound from "./Common/NotFound";
import AdminLogin from "./Admin/AdminLogin";
import Orders from "./Admin/Orders";

class Body extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route exact path="/Admin" component={AdminLogin} />
            <Route exact path="/Orders" component={Orders} />
            <Route exact path="/Main" component={Main} />
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
