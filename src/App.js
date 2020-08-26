import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
