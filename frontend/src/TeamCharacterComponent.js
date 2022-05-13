import React, { useState } from "react";
import { BottomNavigation, Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default class TeamCharacterComponent extends React.Component {
	state = {
		name: "",
		surname: "",
		rank: "",
		pic: null,
		story: "",
		icon: null,
		weapon: "",
		profession: "",
	};

	constructor(props) {
		super(props);
		this.state.name = props.name;
		this.state.surname = props.surname;
		this.state.rank = props.rank;
		this.state.pic = props.pic;
		this.state.story = props.story;
		this.state.icon = props.icon;
		this.state.weapon = props.weapon;
		this.state.profession = props.profession;
	}

	render() {
		const paddingInt = 15;
		const style = {
			paddingTop: paddingInt,
			paddingBottom: paddingInt,
			paddingLeft: paddingInt,
			paddingRight: paddingInt,
		};

		return (
			<Paper elevation={3} style={style}>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					style={style}
				>
					<Grid item xs={3}>
						<Container>
							<Typography>{this.state.icon}</Typography>

							<Typography variant="h4">
								{this.state.name + " " + this.state.surname}
							</Typography>
							<Typography variant="h5">
								{this.state.rank}
							</Typography>
							<div width={300}>
								<img src={this.state.pic} width={250} />
							</div>

							<Typography variant="h5">
								{this.state.profession}
							</Typography>
							<Typography variant="h5">
								{this.state.weapon}
							</Typography>
						</Container>
					</Grid>

					<Grid item xs={6}>
						<Container>
							<Typography variant="h4">Historia</Typography>
							<Typography>
								{this.state.story
									.split("\n")
									.map((paragraph) => {
										return <p>{paragraph}</p>;
									})}
							</Typography>
						</Container>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}
