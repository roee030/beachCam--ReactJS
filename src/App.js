import React from "react";
import "./App.css";
import Home from "./Components/Home.js";
import BeachCam from "./Components/BeachCam";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cams/:id" component={BeachCam}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
