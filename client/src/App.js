import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/admin/Home";
import Menu from "./pages/visitor/Menu";
import Orders from "./pages/admin/Orders"
import NoPath from "./pages/NoPath";
import AdminMenu from "./pages/visitor/Menu";
import AdminOrders from "./pages/admin/Orders"
import Nav from "./components/NavSection";
import './App.css';

// TK
import { Provider } from "react-redux";
import store from "../src/state";

// TK// Common Components
import Navbar from "../src/components/common/Navbar";
import ModalController from "../src/components/modals";

// Pages
import AdminHome from "../src/components/pages/Home";
import Post from "../src/components/pages/Post";
import AuthRoute from "../src/utils/AuthRoute";
import ReactExamples from "./pages/ReactExamples";
import Footer from "../src/components/common/Footer";


function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/admin" component={AdminHome} />
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
