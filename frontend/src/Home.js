import React, { useState } from "react";
import { Navbar, Button, Carousel } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import img_home_carousel_1 from "./images/img_home_carousel_1.jpeg";
import img_home_carousel_2 from "./images/img_home_carousel_2.jpeg";
import img_home_carousel_3 from "./images/img_home_carousel_3.jpeg";
import img_home_carousel_4 from "./images/img_home_carousel_4.jpeg";
import img_home_carousel_5 from "./images/img_home_carousel_5.jpeg";
import img_home_carousel_6 from "./images/img_home_carousel_6.jpeg";
import img_home_carousel_7 from "./images/img_home_carousel_7.jpeg";
import img_home_rental_1 from "./images/img_home_rental_1.jpg";
import img_home_rental_2 from "./images/img_home_rental_2.jpg";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";

import logo from "./images/gh_deer_logo_beta.png";
import logo_kontur from "./images/img_jelon_kontur.png";

const aboutUsString =
	"Drużyna Gylda Hirtir zamieszkuje osadę niewielką w miejscu,\
					gdzie dwa władztwa się przenikają. Od północy bowiem ciągnie\
					ku niej wiatr pogański, źródło swe znajdujący u Gorma\
					Starego, który w Jelling rezydując wciąż tkwi w\
					innowierczych błędach. Od południa zaś promienieje nań blask\
					najświętszych rządów króla Sasów i Franków Ottona, który\
					będąc pobożnym chrześcijaninem nieustannie czyni starania,\
					aby zagubionemu stadu północy wskazać drogę do owczarni\
					pańskiej. \nDowództwo nad nią sprawuje człowiek mieniący się\
					jarlem, co w mowie północnej wodza oznacza, a który to przez\
					ojca swego obdarowany został imieniem Einar. Człek ów,\
					chciwym ponad miarę będąc, bardziej ceni blask srebrnych\
					monet niźli pokorę, uczciwość i wierność. Prowadzi on swych\
					kompanów, zwących się drużynnikami, na misje wszelakiego\
					rodzaju, które zlecają mu tak niegodziwcy, jak i ludzie\
					prawi. Prawdą jest, że maniery jego niczym jad sączone w\
					serca towarzyszy, popychają ich nad wyraz często do\
					niegodziwości, aczkolwiek wspomnieć muszę, że nawet w korcu\
					zepsutego zboża jedno dobre ziarno potrafi się uchować.\
					\nStojąc zatem pomiędzy dwiema stronami, drużyna żadnej nie\
					jest posłuszna, czyniąc jedynie to, co jej samej zysk\
					przynieść może. Jej członkowie poganami będąc w większości,\
					lubują się w składaniu ofiar swym bogom, prosząc ich o\
					wszystko, czego zapragną ich proste serca. Wiara ta, choć\
					jedynie cieniem przy światłości chrześcijaństwa pozostaje,\
					zdaje się wzmacniać ich ducha. Kiedy bowiem do starć\
					zbrojnych przychodzi, z rzadka zdarza się, że bez wyraźnego\
					rozkazu ratują swe życia ucieczką, którą za największą hańbę\
					sobie poczytują. \nSama zaś drużyna składa się z wszelakiej\
					maści mężów i niewiast, z których jedni rzemiosłem się\
					parają, inni służby u bogatszych od siebie czynią, jeszcze\
					inni, których większość w ich szeregach, dusze marsowe\
					posiadając, czynią użytek z broni wszelakiego rodzaju.\
					Wielki wśród nich panuje porządek. Jarl twardą ręką swych\
					kompanów trzymający, dba aby każdy z nich swe miejsce w\
					drużynie zajmował, dzięki czemu spory wśród nich są rzadkie,\
					a waśnie nie trwają długo. Wielkim staraniem tejże drużyny\
					jest, bez wątpienia, ciągłe wzmacnianie swych szeregów\
					nowymi rekrutami, których mnogość potrzebna jest na\
					czynionych wspólnie wyprawach, tak lądowych, jak i morskich.\
					\nZe względu zaś na mnogość chętnych oraz duże ryzyko tychże\
					przedsięwzięć, wybitny frasunek czynią nad tym, kogo w swe\
					szeregi wcielić, odrzucając ludzi kłótliwych, leniwych i\
					innymi wadami charakteru obdarzonych. W czasie pokoju cenią\
					sobie oni odpoczynek, acz nie stronią od prac wszelakich,\
					dbając o swe domy lub służąc za pomocników miastu Haithabu.\
					W czasie zaś wojny lub innej zawieruchy zaciągają się na\
					służbę u bogatszych władyków lub samemu próbując szczęścia\
					wyruszają w morze z nadzieją na spotkanie niepilnie\
					strzeżonych transportów kupieckich. Mamona zaś zdobyta tak\
					przez uczynki prawe, jak i profesję marsową, dzielona jest\
					sprawiedliwie wedle ważności zajęcia i stażu w ich\
					szeregach.";

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
					Dołącz do nas
				</Button>
			</Grid>
		</Grid>
	);
}

function AboutUs(props) {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<h1>
					Wstęp do "Dziejów Einara Pawia i jego drużyny, która
					Jeleniami Złotymi zwać się zwykła", pióra Wigona z Hamburga.
				</h1>
			</Grid>
			<Grid item xs={12}>
				{props.text.split("\n").map((i) => {
					//https://www.jsdiaries.com/how-to-create-a-new-line-in-jsx-and-reactjs/
					return <p>{i}</p>;
				})}
			</Grid>
		</Grid>
	);
}

function ImgBackground(props) {
	return (
		<img
			src={props.img}
			style={{ width: "100%", opacity: "0.5" }}
			align="center"
		/>
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

function HomeCarousel(props) {
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
						<img src={props.image1} width={1170} alt="" />
					</Paper>
				</Carousel.Item>

				<Carousel.Item>
					<Paper elevation={3} variant="outlined">
						<img src={props.image2} width={1170} alt="" />
					</Paper>
				</Carousel.Item>
				<Carousel.Item>
					<Paper elevation={3} variant="outlined">
						<img src={props.image3} width={1170} alt="" />
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

function CardContainer() {
	return (
		<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item md={4}>
				<MediaCard prop_image={img_home_rental_1} />
			</Grid>
			<Grid item md={4}>
				<MediaCard prop_image={img_home_rental_1} />
			</Grid>
			<Grid item md={4}>
				<MediaCard prop_image={img_home_rental_1} />
			</Grid>
		</Grid>
	);
}

export default function Home() {
	return (
		<Container>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				style={{ paddingTop: 80 }}
			>
				<Grid item xs={12}>
					<HomeCarousel
						image1={img_home_carousel_1}
						image2={img_home_carousel_2}
						image3={img_home_carousel_3}
					/>
				</Grid>
				<Grid item xs={12}>
					<AboutUs text={aboutUsString} />
				</Grid>
				<Grid item xs={12}>
					<Text4 />
				</Grid>{" "}
				*/}
				<Grid item xs={12}>
					<HomeCarousel
						image1={img_home_carousel_5}
						image2={img_home_carousel_6}
						image3={img_home_carousel_7}
					/>
				</Grid>
				{/* <Grid item xs={12}>
					<CardContainer />
				</Grid> */}
			</Grid>
		</Container>
	);
}
