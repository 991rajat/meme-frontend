import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Create from "./components/layout/Create";
import MemeCards from "./components/layout/MemeCards";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { getMemes } from "./actions/meme";
import MemeCard from "./components/layout/MemeCard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>
        <div className="container">
          <Route exact path="/">
            <MemeCards />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
