import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue, StateProvider } from "./StateProvider";
import Payment from "./components/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_51HUX99FBK4mc2BcQnCcbARx4pWZARmLVW9mH4eStcvIHy8OA53UM08PEKT2LZnfZrZeHZDUrE2bJW2iItaB80JFN00JG66gThY");

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
			<Router>
				<div className="app">
					<Switch>
						<Route path="/orders">
							<Header />
							<Orders/>
						</Route>
						<Route path="/payments">
						<Header />
							<Elements stripe={promise}>
							<Payment />
							</Elements>
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/checkout">
							<Header />
							<Checkout />
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
