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
import Orders from "./components/pages/Orders/VisitorOrders";
import Menu from "./components/pages/Menu";
import NoPath from "./components/pages/NoPath";
import Post from "../src/components/pages/Post";
import AuthRoute from "../src/utils/AuthRoute";


function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={VisitorHome} />
          <Route exact path="/admin/" component={AdminHome} />
          <Route exact path="/orders" component={Orders} />
          {/* <Route exact path="/menu" component={Menu} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/admin/orders" component={AdminOrders} />
        <Route exact path="/admin/menu-itmes" component={AdminMenu} />
        <Route exact path="/admin/orders" component={AdminOrders} /> */}
          <Route component={NoPath} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
