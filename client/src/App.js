import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// TK
import { Provider } from "react-redux";
import store from "../src/state";

// TK// Common Components
import ModalController from "../src/components/modals";

// Pages
import Hub from "./components/pages/Hub";
import NoPath from "./components/pages/NoPath";
import Nav from "./components/common/NavSection";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Orders from "./components/pages/Orders";
import Menu from "./components/pages/Menu";
import Post from "../src/components/pages/Post";
import AuthRoute from "../src/utils/AuthRoute";

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* Visitor/client renders */}
            <Route path="/" component={Hub.Visitor}>
              <Route component={Nav.Visitor} />
                <Switch>
                    <Route exact path="/" component={Home.Visitor} />
                    <Route exact path="/orders" component={Orders.Visitor} />
                    <Route exact path="/menu" component={Menu.Visitor} />
                    <Route component={NoPath} />
                </Switch>
              <Route component={Footer.Visitor} />
            </Route>
            {/* Admin renders */}
            <Route path="/admin" component={Hub.Admin}>
              <Route component={Nav.Admin} />
                <Switch>
                    <Route exact path="/" component={Home.Admin} />
                    <Route exact path="/orders" component={Orders.Admin} />
                    <Route exact path="/menu" component={Menu.Admin} />
                    <Route component={NoPath} />
                </Switch>
              <Route component={Footer.Admin} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;