import React, { useState } from "react";
import { Navbar, Button, Carousel } from "react-bootstrap";
import { Paper } from "@material-ui/core";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";

import logo from "./images/gh_deer_logo_beta.png";
import icon_tunic from "./images/icon_tunic.png";
import icon_pants from "./images/icon_pants.png";
import icon_wrappers from "./images/icon_wrappers.png";
import icon_belt from "./images/icon_belt.png";
import icon_shoes from "./images/icon_shoes.png";
import icon_runestone from "./images/icon_runestone.png";
import icon_knife from "./images/icon_knife.png";
import icon_fibula from "./images/icon_fibula.png";
import icon_spoon from "./images/icon_spoon.png";
import icon_bowl from "./images/icon_bowl.png";
import icon_mug from "./images/icon_mug.png";
import icon_sheep from "./images/icon_sheep.png";
import icon_blanket from "./images/icon_blanket.png";
import icon_waterbag from "./images/icon_waterbag.png";
// import icon_bag from "./images/icon_bag.png";
import icon_coat from "./images/icon_coat.png";
import icon_hood from "./images/icon_hood.png";
import icon_socks from "./images/icon_socks.png";
import icon_underwear from "./images/icon_underwear.png";

const textIntro =
	"Poniżej przedstawiam cały okres rekrutacyjno-przygotowawczy, który obejmuję Was od chwili przystąpienia do drużyny.\
 Trwa on 6 miesięcy, w trakcie których musicie wybrać imię i napisać historię odgrywanej postaci; \
 skompletować podstawowe wyposażenie oraz przejść rozmowę z Jarlem, który podda ocenie efekty Waszej pracy. \
 \n\n Każdy z Was na starcie zostaje Thjonnem, czyli sługą. Historycznie to osoba, która jest zależna finansowo od swojego pracodawcy. \
 Pełni funkcje zawarte w opisie Thralla, ale posiada wolność osobistą, jednak bez prawa głosu podczas Thingów i Althingów.\
 Aby zostać awansowanym na Boendra, czyli człowieka w pełni wolnego z prawem głosu podczas Thingów i Althingów, musicie przejść następujący proces:";

const textMonth1 =
	'Okres pierwszego miesiąca, podczas którego niejako "bronicie" swoją pozycję. Aby go zaliczyć musicie . zgromadzić podstawowy strój, na który składają się:\
\n-   w przypadku mężczyzny: tunika lub kaftan wełniany, spodnie wełniane, owijacze wełniane, pasek skórzany\
\n-   w przypadku kobiety: suknia wełniana, spodnie wełniane (opcjonalnie), giezło lniane, pasek skórzany lub tekstylny\
\n-   w tym czasie również ustalacie swoje imię i opcjonalnie nazwisko historyczne. ';

const textMonth2 =
	'W drugim miesiącu zobowiązani jesteście zdobyć:\
\n-   buty oraz skonstruować historię odgrywanej postaci. W przypadku niewywiązania się czasowego z aspektów zawartych w punktach "1 - 2" Thjonn spada pod koniec drugiego miesiąca do pozycji Thralla.';

const textMonth3 =
	"W trzecim miesiącu rozpoczyna się druga część okresu rekrutacyjno-przygotowawczego, w którym musicie wyekwipować się w: \
\n-   płaszcz wełniany, kaptur wełniany, skarpety lub nogawiczki wełniane oraz bieliznę lnianą (gacie lniane oraz w przypadku mężczyzn koszula lniana).";

const textMonth4 =
	"W czwartym miesiącu każdy powinien posiadać:\
\n-   nóż w prostej oprawie oraz metalową fibulę. ";

const textMonth5 =
	"Do końca piątego miesiąca należy zdobyć:\
\n-   drewnianą łyżkę, miskę lub korytko drewniane, kubek gliniany lub róg bydlęcy oraz podłoże do spania w postaci koca wełnianego i skóry owczej lub siennika i materiału do przykrycia. ";

const textMonth6 =
	"W miesiącu szóstym drużynnik finalizuje swój podstawowy ekwipunek uzupełniając go o zestaw marszowy w którego skład wchodzą:\
\n-   dodatkowy koc wełniany lub skóra owcza, bukłak skórzany lub czutorka gliniana, worek lniany lub wełniana torba, drewniany szkielet na wzór plecaka, skórzane lub materiałowe rzemienie do mocowania plecaka.";

const textOutro =
	"Jeżeli pod koniec szóstego miesiąca kandydat będzie posiadał cały wyżej wymieniony ekwipunek, \
może podejść do rozmowy sprawdzającej orientację historyczną w dziejach IX-X wieku, \
a także mitologii nordyckiej. Jeżeli ją zaliczy, zakończy tym samym swój okres rekrutacyjny.\
Następnie jego osoba zostanie poddana pod rozwagę Jarla, który oceni jej dotychczasowe zaangażowanie w sprawy drużynowe. \
Jeżeli Wódz uzna, że wykazał się wystarczająco, wtedy zostaniecie awansowany na stopień Boendra, \
stając się pełnoprawnym członkiem drużyny. W przeciwnym wypadku Jarl odprawi gnuśnego Thjonna, \
który będzie zmuszony porzucić nadzieję na wyprawy pod jego komendą.";

function TextTop() {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<h1>Dołącz do nas</h1>
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

function EnrollIntro(props) {
	return (
		<Paper elevation={3} style={{ paddingTop: 30, paddingBottom: 30 }}>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				style={{ paddingLeft: 15, paddingRight: 15 }}
			>
				<Grid item xs={12}>
					<h1>{props.header}</h1>
				</Grid>
				<Grid item xs={12}>
					<img />
				</Grid>
				<Grid item xs={12}>
					{props.stepText.split("\n").map((i) => {
						//https://www.jsdiaries.com/how-to-create-a-new-line-in-jsx-and-reactjs/
						return <p>{i}</p>;
					})}
				</Grid>
			</Grid>
		</Paper>
	);
}

function Icons(props) {
	return (
		<>
			{props.icons.map((element) => {
				<Grid item xs={3}>
					<img src={element} width={300} />
				</Grid>;
			})}
		</>
	);
}
export default function JoinUs() {
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
					<EnrollIntro header="Wstęp" stepText={textIntro} />
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={3}>
					<img src={icon_tunic} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_pants} height={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_wrappers} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_belt} width={300}></img>
				</Grid>
				{/* <Icons
					icons={[icon_tunic, icon_pants, icon_pants, icon_belt]}
				/> */}
				<Grid item xs={12}>
					<EnrollIntro
						header="Miesiąc pierwszy"
						stepText={textMonth1}
					/>
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={6}>
					<img src={icon_shoes} width={300}></img>
				</Grid>
				<Grid item xs={6}>
					<img src={icon_runestone} height={300}></img>
				</Grid>
				<Grid item xs={12}>
					<EnrollIntro header="Miesiąc drugi" stepText={textMonth2} />
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={3}>
					<img src={icon_coat} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_hood} height={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_socks} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_underwear} width={300}></img>
				</Grid>
				<Grid item xs={12}>
					<EnrollIntro
						header="Miesiąc trzeci"
						stepText={textMonth3}
					/>
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={6}>
					<img src={icon_knife} width={300}></img>
				</Grid>
				<Grid item xs={6}>
					<img src={icon_fibula} height={300}></img>
				</Grid>
				<Grid item xs={12}>
					<EnrollIntro
						header="Miesiąc czwarty"
						stepText={textMonth4}
					/>
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={3}>
					<img src={icon_spoon} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_bowl} height={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_mug} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_blanket} width={300}></img>
				</Grid>
				<Grid item xs={12}>
					<EnrollIntro header="Miesiąc piąty" stepText={textMonth5} />
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={3}>
					<img src={icon_sheep} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_blanket} height={300}></img>
				</Grid>
				<Grid item xs={3}>
					<img src={icon_waterbag} width={300}></img>
				</Grid>
				<Grid item xs={3}>
					{/* <img src={icon_bag} width={300}></img> */}
				</Grid>
				<Grid item xs={12}>
					<EnrollIntro
						header="Miesiąc szósty"
						stepText={textMonth6}
					/>
				</Grid>
				{
					//-------------------------------------------------------------------------------
					//-------------------------------------------------------------------------------
				}
				<Grid item xs={12}>
					<EnrollIntro header="Podsumowanie" stepText={textOutro} />
				</Grid>
			</Grid>
		</Container>
	);
}
