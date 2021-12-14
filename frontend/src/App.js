import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import User from "./User";
import Booking from "./Booking";
import Register from "./Register";
import Page_404 from "./Page_404";
import { Switch, useRouteMatch, withRouter } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import JoinUs from "./JoinUs";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Team from "./Team";

import { useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// class App extends Component {
function App() {
	// z: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
	// function App() {

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(/*tu coś*/);
	// }, [dispatch]);

	return (
		<>
			<Main />
		</>
	);
}

function Main() {
	const { path } = useRouteMatch();

	return (
		<>
			<Header />
			<Switch>
				<Route path={path} exact component={Home} />
				<Route path={path + "join"} component={JoinUs} />
				<Route path={path + "about"} component={AboutUs} />
				<Route path={path + "team"} component={Team} />
				<Route path={path + "contact"} component={ContactUs} />
				<Route exact path="*" component={Page_404} />
			</Switch>
			<Footer />
		</>
	);
}

export default withRouter(App);
