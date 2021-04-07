import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import './App.css';
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders.js";

require("dotenv").config();

const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

// For css, I'll be using the BEM convention
function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
