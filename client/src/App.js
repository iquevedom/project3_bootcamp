import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/visitor/Home";
import Menu from "./pages/visitor/Menu";
import Orders from "./pages/visitor/Orders"
import NoPath from "./pages/NoPath";
import AdminHome from "./pages/admin/Home";
import AdminMenu from "./pages/admin/Menu";
import AdminOrders from "./pages/admin/Orders"
import Nav from "./components/NavSection";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
          {/* <Route exact path="/menu" component={Menu} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/admin/orders" component={AdminOrders} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/menu-itmes" component={AdminMenu} />
        <Route exact path="/admin/orders" component={AdminOrders} /> */}
          <Route component={NoPath} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
