import React from "react";
import { Navbar } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import logo from "./images/gh_deer_logo_beta.png";
import "w3-css/w3.css";

import "bootstrap/dist/css/bootstrap.min.css";

// https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
// Myk z import działa.
const nazwa_strony = "HIRD GYLDA HIRTIR";
const url = "https://www.linkedin.com/in/martin-m-permus/";
const link_linkedin = <a href={url}>M. M. Permus</a>;

//https://www.30secondsofcode.org/react/s/mailto
const Mailto = ({ email, subject = "", body = "", children }) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export function Footer() {
	return (
		<>
			<Navbar fixed="bottom" bg="dark">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<p>link1</p>
							</Grid>
							<Grid item xs={12}>
								<p>link1</p>
							</Grid>
							<Grid item xs={12}>
								<p>link1</p>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={4}>
						<img src={logo} width="150" height="150" alt="" />
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6" gutterBottom component="div">
							Napisz do nas:
						</Typography>
						<Typography variant="h6" gutterBottom component="div">
							<Mailto
								email="gyldahirtir@gmail.com"
								subject=""
								body=""
							>
								gyldahirtir@gmail.com
							</Mailto>
						</Typography>
					</Grid>
				</Grid>

				<Typography variant="h6" gutterBottom component="div">
					Made with 💛 by {link_linkedin}
				</Typography>
			</Navbar>
		</>
	);
}
