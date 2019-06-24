/* eslint-disable no-unused-vars */
import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { AdminHomePage } from "../AdminHomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { NavBar } from "../_components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

import "./../scss/app.module";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div id="container" className="container-fluid">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>
        <div id="content" className="row">
          <Router history={history}>
            <div className="col-12">
              <PrivateRoute exact path="/adminhome" component={AdminHomePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>
          </Router>
        </div>
        <div className="row">
          <footer className="col-12 p-2 text-right">
            &copy; Stuart Hopwood
          </footer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
