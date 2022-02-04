import React, { useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import { useStateValue } from './Component/StateProvider/StateProvider';
import { auth } from './Component/firebase';
import Payment from './Component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
// import Temu from './Temu';
const promise = loadStripe(
  'pk_test_51KEoBXJjNXOfPpiF9SL9oBpNSGrQviQTVMFpn6ttT4b2sPLuWQh7UddcZNay2Y6FhTV4Df3Ty8MrqtSZ1fg8qake00nT2M69tn'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/Orders">
            <Header />
            <Orders />
            
          </Route>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
        <Elements stripe={promise}>
              <Payment />
            </Elements>
        </Route>
       
        <Route path="/checkout">
          <Header />
          <Checkout/>
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
