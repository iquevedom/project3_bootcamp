import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';

// TK
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/state";

// TK// Common Components
import Navbar from "../src/components/common/Navbar";
import ModalController from "../src/components/modals";

// Pages
import Home from "../src/components/pages/Home";
import Post from "../src/components/pages/Post";
import AuthRoute from "../src/utils/AuthRoute";
import ReactExamples from "./pages/ReactExamples";
import Footer from "../src/components/common/Footer";


function App(props) {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/documentation" component={AuthRoute(Post)} />
              <Route path="/react-examples" component={ReactExamples} />
            </Switch>
            <Footer/>
            <ModalController />
          </div>
        </Router>
    </Provider>
  );
}

export default App;
