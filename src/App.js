import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Global from "./pages/global";
import India from "./pages/india";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Covidsymptoms from "./pages/Covidsymptoms";
import Graph from "./pages/Graph";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={India} />
            <Route exact path="/globalstats" component={Global} />
            <Route exact path="/aboutcovid" component={Covidsymptoms} />
            <Route path="/graph" component={Graph} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
