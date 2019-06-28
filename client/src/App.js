import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// TK
import { Provider } from "react-redux";
import store from "../src/state";

// TK// Common Components
import ModalController from "../src/components/modals";

// Pages
import VisitorHome from "./components/pages/Home/VisitorHome";
import AdminHome from "./components/pages/Home/AdminHome";
import Home from "./components/pages/Home"
import Orders from "./components/pages/Orders/VisitorOrders";
import Menu from "./components/pages/Menu";
import NoPath from "./components/pages/NoPath";
// import Post from "../src/components/pages/Post";
// import AuthRoute from "../src/utils/AuthRoute";


function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          {/* Visitor/client renders */}
          <Route exact path="/" component={Home.Visitor} />
          <Route exact path="/orders" component={Orders.Visitor} />
          <Route exact path="/menu" component={Menu.Visitor} />
          {/* Admin renders */}
          <Route exact path="/admin/" component={Home.Admin} />
          <Route exact path="/admin/orders" component={Orders.Admin} />
          <Route exact path="/admin/menu" component={Menu.Admin} />
          <Route exact path="/admin/menuManagement" component={Menu.Detail} />
          <Route component={NoPath} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
