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
            <Route path="/Admin" component={AdminLogin} />
            <Route path="/Orders" component={Orders} />
            <Route path="/Main" component={Main} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/Main" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Body;
