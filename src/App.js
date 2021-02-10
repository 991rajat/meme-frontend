import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Create from "./components/layout/Create";
import MemeCards from "./components/layout/MemeCards";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { getMemes } from "./actions/meme";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Create />
        <MemeCards />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/memes">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
