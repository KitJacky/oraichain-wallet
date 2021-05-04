import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthLayout from "src/components/AuthLayout";
import SignIn from "src/components/SignIn/SignIn";
import MainLayout from "src/components/MainLayout";
import Home from "src/components/Home";
import SendTokens from "src/components/SendTokens";

const App = ({}) => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <AuthLayout>
            <SignIn />
          </AuthLayout>
        </Route>
        <Route path="/send-tokens">
          <MainLayout>
            <SendTokens />
          </MainLayout>
        </Route>
        <Route path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
