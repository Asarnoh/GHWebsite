import React, { useState } from "react";
import { Navbar, Button, Carousel } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import team_pic1 from "./images/team_pic1.jpeg";
import team_pic2 from "./images/team_pic2.jpeg";
import team_pic3 from "./images/team_pic3.png";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";

import TeamCharacterComponent from "./TeamCharacterComponent";

import logo from "./images/gh_deer_logo_beta.png";

import img_home_rental_1 from "./images/img_home_rental_1.jpg";
import img_exempel from "./images/img_exempel.jpg";

const teamStory1 =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, \
orci mattis porta mattis, ipsum neque ultricies felis, vitae fringilla arcu est vel elit. \
\nMauris ut nibh eu velit faucibus sollicitudin. Praesent nulla mauris, vestibulum semper purus nec, \
iaculis venenatis ligula. Phasellus ultricies vitae arcu eget posuere. Vivamus condimentum ut libero quis fringilla. \
Nam ac aliquet purus. Proin facilisis libero in egestas dapibus. Aenean et dolor nibh. Integer non tincidunt tellus. \
Aenean ullamcorper leo at tortor egestas, at posuere felis placerat. Suspendisse potenti. \
ed at dui est. In nec pretium leo. Ut ac ornare velit. Donec nunc eros, pulvinar nec odio sed, \
sodales pretium augue. Pellentesque quis facilisis ipsum, eu eleifend lectus.Nunc pretium tortor vitae sem posuere, \
vel viverra felis fringilla. Nulla nec nibh purus. Suspendisse in purus sit amet dui finibus rhoncus non sit amet nunc. \
\nIn dignissim lectus elit, in vehicula sem eleifend vel. Integer semper sem eget feugiat gravida. Curabitur blandit diam \
vel enim porta scelerisque. Fusce bibendum ligula quis nisi mattis, vitae pulvinar turpis porttitor. Praesent sed ipsum \
at quam lobortis interdum.";

const teamStory2 =
	"Urodzony w roku 938 na obrze??ach miasta Hedeby. Matka umar??a podczas porodu jego brata. \
	Wi??d?? spokojne ??ycie wraz z ojcem  i 2 lata starszym bratem Rolfem. Pod okiem ojca Haralda bracia uczyli si?? walki, \
	opowiada?? im r????ne opowie??ci o bogach sta?? si?? dla nich autorytetem.  Tak wi??c ??ycie toczy??o si?? sielankowo \
	dla Thorsteina do czasu, gdy w roku 948 ojciec nie przyby?? z jednej z wielu jego wypraw lupiezczych. \
	\nThorstein wraz z bratem postanowi?? odej???? z domu i wyruszy?? w ??wiat poniewa?? nic ich nie trzyma??o w domu. \
	Po latach tulaczki Znalezli dru??yn?? z kt??rymi bardzo si?? zaprzyjaznili. Tak wi??c 955 roku Thorstein trafi?? \
	do za??ogi znanego Einara Ingvarssona. Tam pozna?? Valgarda Tryggvasona kt??ry przekaza?? tragiczna wie???? o ??mierci ojca. \
	Opowiada?? ??e Harald z Hedeby zgin???? podczas wypedzania Eryka Krwawy Top??r z ulic Yorku. Valgard opowiedzia?? \
	tak??e ze odpowiedzialnymi osobami za ??mier?? ich ojca s?? mozni Kr??la Edreda. Thorstein wraz z bratem poprzysiegli, \
	??e zabij?? ludzi  i pomszcz?? ojca. Dru??yna Jarla Einara obieca??a im pom??c przeciwko zab??jc??w ich ojca.\
	\nTak wi??c  po wielu trudach Thorstein odnalaz?? morderc?? ojca kt??rym by?? niestety Valgard. \
	Jego brat Rolf zosta?? przyci??gni??ty na stron?? Valgarda i kilku innych jego poplecznik??w. \
	\nThorstein nie mia?? ??adnych z??udze?? ??e jego brat go zdradzi?? za wizj?? otrzymania nagrody. ";

const TeamList = [
	{
		name: "Exempel",
		surname: "Exempelsson",
		rank: "Jarl",
		pic: team_pic1,
		story: teamStory1,
		icon: "",
		weapon: "Light Magic",
		profession: "Guardian",
	},
	{
		name: "Exempel",
		surname: "Exempelsson",
		rank: "Not jarl",
		pic: team_pic2,
		story: teamStory1,
		icon: "",
		weapon: "Spirit Magic",
		profession: "Revenant",
	},
	{
		name: "Exempel",
		surname: "Exempelsson",
		rank: "Not jarl either",
		pic: team_pic3,
		story: teamStory1,
		icon: "",
		weapon: "Shadow Magic",
		profession: "Thief",
	},
	{
		name: "Wigon",
		surname: "Hamburgersson",
		rank: "Karll",
		pic: img_home_rental_1,
		story: teamStory1,
		icon: "",
		weapon: "Shadow Magic",
		profession: "Thief",
	},
	{
		name: "Thorstein",
		surname: "Haraldson",
		rank: "Karll",
		pic: img_exempel,
		story: teamStory2,
		icon: "",
		weapon: "Bushido Magic",
		profession: "Kret",
	},
];

function TextTop() {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<h1>Ipsum lorem</h1>
			</Grid>
			<Grid item xs={12}>
				<p>
					"Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est,
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
					velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem. Ut enim
					ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur? Quis autem vel eum iure reprehenderit qui in ea
					voluptate velit esse quam nihil molestiae consequatur, vel
					illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
				</p>
			</Grid>
			<Grid item xs={6}>
				<Button variant="dark" size="lg">
					Do????cz do nas
				</Button>
			</Grid>
		</Grid>
	);
}

function DeerComponent() {
	const paperStyles = {
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: "black",
	};

	return (
		<Paper elevation={15} style={paperStyles}>
			<div align="center">
				<img src={logo} width={256} alt="TheGoldenDeer" />
			</div>
		</Paper>
	);
}

function MediaCard(prop_image) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={prop_image}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

function CardContainer() {
	return (
		<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item md={4}>
				<MediaCard prop_image={team_pic1} />
			</Grid>
			<Grid item md={4}>
				<MediaCard prop_image={team_pic2} />
			</Grid>
			<Grid item md={4}>
				<MediaCard prop_image={team_pic3} />
			</Grid>
		</Grid>
	);
}

export default function Team() {
	return (
		<Container>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				style={{ paddingTop: 80 }}
			>
				<Grid item xs={12}>
					<TextTop />
				</Grid>

				<Grid item xs={12}>
					<DeerComponent />
				</Grid>

				<Grid item xs={12}>
					<CardContainer />
				</Grid>

				<Grid item xs={12}>
					{TeamList.map((person) => {
						return (
							<div>
								<TeamCharacterComponent
									name={person.name}
									surname={person.surname}
									rank={person.rank}
									pic={person.pic}
									story={person.story}
									icon={person.icon}
									weapon={person.weapon}
									profession={person.profession}
								/>
								<br />
							</div>
						);
					})}
				</Grid>
			</Grid>
		</Container>
	);
}
