import "w3-css/w3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Paper } from "@material-ui/core";

import logo from "./images/gh_deer_logo_beta.png";
import icon_fb from "./images/icon_fb.png";
import icon_ig from "./images/icon_ig.png";
import icon_dsc from "./images/icon_dsc.png";
import icon_mail from "./images/icon_mail.png";
import icon_phone from "./images/icon_phone.png";

const url = "https://www.linkedin.com/in/martin-m-permus/";
const link_linkedin = <a href={url}>M. M. Permus</a>;

const Mailto = ({ email, subject = "", body = "", children }) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const GridFB = () => {
	return (
		<Grid item xs={12}>
			<img src={icon_fb} width="30" height="30" alt="icon_fb" />
			<a href="https://www.facebook.com/GyldaHirtir">
				Drużyna Gylda Hirtir
			</a>
		</Grid>
	);
};

const GridIG = () => {
	return (
		<Grid item xs={12}>
			<img src={icon_ig} width="30" height="30" alt="icon_ig" />
			<a href={"https://www.instagram.com/gyldahirtir/"}>
				Drużyna Gylda Hirtir
			</a>
		</Grid>
	);
};

const GridDSC = () => {
	return (
		<Grid item xs={12}>
			<img src={icon_dsc} width="30" height="23" alt="icon_dsc" />
			<a href="https://www.facebook.com/GyldaHirtir">
				Drużyna Gylda Hirtir
			</a>
		</Grid>
	);
}; //https://medium.com/geekculture/creating-a-contact-form-with-react-and-discord-9f1230472c66 TODO

const GridMail = () => {
	return (
		<Grid item xs={12}>
			<img src={icon_mail} width="30" height="23" alt="icon_mail" />
			<a href="mailto:gyldahirtir@gmail.com"> Mail</a>
		</Grid>
	);
};

const GridPhone = () => {
	return (
		<Grid item xs={12}>
			<img src={icon_phone} width="30" height="30" alt="icon_phone" />
			<a href="tel:+48500723375"> Telefon</a>
		</Grid>
	);
};

//https://www.30secondsofcode.org/react/s/mailto

export function Footer() {
	return (
		<div style={{ paddingTop: 40 }}>
			<Paper elevation={9}>
				<Navbar
					bg="light"
					style={{
						paddingTop: 40,
						paddingBottom: 40,
						paddingLeft: 30,
						paddingRight: 30,
					}}
				>
					<div style={{ position: "relative" }}>
						<Grid container spacing={75}>
							<Grid item xs={4}>
								<div>
									<GridFB />
									<br />
									<GridIG />
									<br />
									<GridDSC />
									<br />
									<GridMail />
									<br />
									<GridPhone />
								</div>
							</Grid>
							<Grid item xs={4}>
								<img
									src={logo}
									width="150"
									height="150"
									alt=""
								/>
							</Grid>
							<Grid item xs={4}>
								<Typography
									variant="h6"
									gutterBottom
									component="div"
								>
									Napisz do nas:
								</Typography>
								<Typography
									variant="h6"
									gutterBottom
									component="div"
								>
									<Mailto
										email="gyldahirtir@gmail.com"
										subject=""
										body=""
									>
										gyldahirtir@gmail.com
									</Mailto>
								</Typography>

								<div
									style={{
										position: "relative",
										paddingTop: 80,
									}}
								>
									<Typography
										variant="h6"
										gutterBottom
										component="div"
									>
										Made with 💛 <br />
										by {link_linkedin}
									</Typography>
								</div>
							</Grid>
						</Grid>
					</div>
				</Navbar>
			</Paper>
		</div>
	);
}
