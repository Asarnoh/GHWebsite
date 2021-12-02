import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "./images/gh_deer_logo_beta.png";
import "w3-css/w3.css";

import "bootstrap/dist/css/bootstrap.min.css";

// https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
// Myk z import działa.
const nazwa_strony = "HIRD GYLDA HIRTIR";

export function Header() {
	const __selector = useSelector((state) => state.authReducer);
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);
	console.log(`user = ${user?.response}`);
	const userName = user?.response?.name;
	const userImageUrl = user?.response?.imageUrl;
	console.log(`userName = ${userName}, userImageUrl = ${userImageUrl}`);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history.push(`/`);
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem(`profile`)));
	}, [location]);

	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="/">
					<Container>
						<img src={logo} width="50" height="50" alt="" />
						<h3>{nazwa_strony}</h3>
					</Container>
				</Navbar.Brand>

				<Nav fill variant="tabs" defaultActiveKey="/home">
					<Nav.Link as={Link} to="/booking">
						O nas
					</Nav.Link>
					<Nav.Link as={Link} to="/booking">
						Druzynnicy
					</Nav.Link>
					<Nav.Link as={Link} to="/booking">
						Kontakt
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/user"
						className="justify-content-end"
					>
						Panel Użytkownika
					</Nav.Link>
				</Nav>
				{user ? (
					<>
						<Avatar
							alt={userName}
							src={userImageUrl}
							style={{ position: "absolute", right: "120px" }}
						>
							{userName?.charAt(0)}
						</Avatar>
						<p
							style={{
								position: "absolute",
								right: "180px",
								fontWeight: "bold",
							}}
						>
							{userName}
						</p>
						<Button
							style={{ position: "absolute", right: "10px" }}
							variant="dark"
							size="lg"
							active
							onClick={logout}
						>
							Wyloguj
						</Button>
					</>
				) : (
					<>
						<Button
							style={{ position: "absolute", right: "10px" }}
							variant="dark"
							size="lg"
							active
							onClick={() => {}}
							as={Link}
							to="/register"
						>
							Logowanie
						</Button>
					</>
				)}
			</Navbar>
		</>
	);
}
