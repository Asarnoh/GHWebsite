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

export function Footer() {
	return (
		<>
			<Navbar fixed="bottom" bg="dark">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<img src={logo} width="50" height="50" alt="" />
					</Grid>
					<Grid item xs={8}>
						<Typography variant="h3" gutterBottom component="div">
							{nazwa_strony}
						</Typography>
					</Grid>
				</Grid>
			</Navbar>
		</>
	);
}
