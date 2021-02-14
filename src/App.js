import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Create from "./components/layout/Create";
import MemeCards from "./components/layout/MemeCards";
import Footer from "./components/layout/Footer";
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
      <Route
        exact
        path="/swagger-ui"
        render={() =>
          (window.location.href =
            "https://safe-oasis-68429.herokuapp.com/swagger-ui/")
        }
      />
      <Header />

      <Switch>
        <React.Fragment>
          <div className="container">
            <Route exact path="/" component={MemeCards}></Route>
            <Route
              exact
              path="/create"
              render={(props) => <Create {...props} />}
            ></Route>
          </div>
        </React.Fragment>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
