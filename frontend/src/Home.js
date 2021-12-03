import React, { useState } from "react";
import { Navbar, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import img_home_carousel_1 from "./images/img_home_carousel_1.jpeg";
import img_home_carousel_2 from "./images/img_home_carousel_2.jpeg";
import img_home_carousel_3 from "./images/img_home_carousel_3.jpeg";
import img_home_carousel_4 from "./images/img_home_carousel_4.jpeg";
import img_home_rental_1 from "./images/img_home_rental_1.jpg";
import img_home_rental_2 from "./images/img_home_rental_2.jpg";
import logo from "./images/gh_deer_logo_beta.png";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//https://mui.com/getting-started/usage/

function Text2() {
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
					Dołącz do nas
				</Button>
			</Grid>
		</Grid>
	);
}

function Text4() {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<h1>Lorem Ipsum</h1>
			</Grid>
			<Grid item xs={6}>
				<img src={img_home_rental_1} width={550} alt="" />
			</Grid>
			<Grid item xs={6}>
				<img src={img_home_rental_2} width={620} alt="" />
			</Grid>
			<Grid item xs={12}>
				<Paper elevation={3}>
					"At vero eos et accusamus et iusto odio dignissimos ducimus
					qui blanditiis praesentium voluptatum deleniti atque
					corrupti quos dolores et quas molestias excepturi sint
					occaecati cupiditate non provident, similique sunt in culpa
					qui officia deserunt mollitia animi, id est laborum et
					dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinctio. Nam libero tempore, cum soluta nobis est
					eligendi optio cumque nihil impedit quo minus id quod maxime
					placeat facere possimus, omnis voluptas assumenda est, omnis
					dolor repellendus. Temporibus autem quibusdam et aut
					officiis debitis aut rerum necessitatibus saepe eveniet ut
					et voluptates repudiandae sint et molestiae non recusandae.
					Itaque earum rerum hic tenetur a sapiente delectus, ut aut
					reiciendis voluptatibus maiores alias consequatur aut
					perferendis doloribus asperiores repellat."
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Button variant="dark" size="lg">
					Dołącz do nas
				</Button>
			</Grid>
		</Grid>
	);
}

function HomeCarousel() {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div align="center">
			<style>{".carousel-control {color: black;}"}</style>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<Paper elevation={3} variant="outlined">
						<img src={img_home_carousel_1} width={1170} alt="" />
					</Paper>
				</Carousel.Item>

				<Carousel.Item>
					<Paper elevation={3} variant="outlined">
						<img src={img_home_carousel_2} width={1170} alt="" />
					</Paper>
				</Carousel.Item>
				<Carousel.Item>
					<Paper elevation={3} variant="outlined">
						<img src={img_home_carousel_3} width={1170} alt="" />
					</Paper>
				</Carousel.Item>
			</Carousel>
		</div>
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

export default function Home() {
	return (
		<>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				style={{ paddingTop: 80 }}
			>
				<Grid item xs={12}>
					<Text2 />
				</Grid>
				<Grid item xs={12}>
					<HomeCarousel />
				</Grid>
				<Grid item xs={12}>
					<Text4 />
				</Grid>
				<Grid item xs={12}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						style={{ paddingTop: 80 }}
					>
						<Grid item md={3}>
							<MediaCard prop_image={img_home_rental_1} />
						</Grid>
						<Grid item md={3}>
							<MediaCard prop_image={img_home_rental_1} />
						</Grid>
						<Grid item md={3}>
							<MediaCard prop_image={img_home_rental_1} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
