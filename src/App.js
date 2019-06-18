import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/messages" />
        <Route path="/" />
        <Route
          path="*"
          render={() => {
            return <div>Page Not Found. Go Back Home.</div>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
