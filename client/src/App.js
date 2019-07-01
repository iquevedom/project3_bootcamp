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
import Post from "../src/components/pages/Post";
import AuthRoute from "../src/utils/AuthRoute";

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* Admin renders */}
            <Route path="/admin" component={Hub.Admin} />
            {/* Visitor/client renders */}
            <Route path="/" component={Hub.Visitor} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;