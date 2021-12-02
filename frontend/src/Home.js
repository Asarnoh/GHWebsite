import React, { useState } from "react";
import {
	Navbar,
	Nav,
	Table,
	Button,
	Carousel,
	Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img_home_carousel_1 from "./images/img_home_carousel_1.jpeg";
import img_home_carousel_2 from "./images/img_home_carousel_2.jpeg";
import img_home_carousel_3 from "./images/img_home_carousel_3.jpeg";
import img_home_carousel_4 from "./images/img_home_carousel_4.jpeg";
import img_home_rental_1 from "./images/img_home_rental_1.jpg";
import img_home_rental_2 from "./images/img_home_rental_2.jpg";
import logo from "./images/logo_hagalaz.png";

function Text2() {
	return (
		<Jumbotron>
			<h1>Ipsum lorem</h1>
			<p>
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
				voluptas sit aspernatur aut odit aut fugit, sed quia
				consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
				sit amet, consectetur, adipisci velit, sed quia non numquam eius
				modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum
				exercitationem ullam corporis suscipit laboriosam, nisi ut
				aliquid ex ea commodi consequatur? Quis autem vel eum iure
				reprehenderit qui in ea voluptate velit esse quam nihil
				molestiae consequatur, vel illum qui dolorem eum fugiat quo
				voluptas nulla pariatur?"
			</p>

			<br />
			<p>
				<Navbar>
					<Nav fill variant="pills" defaultActiveKey="/booking">
						<Nav.Link as={Link} to="/booking">
							<Button variant="dark" size="lg">
								Zarezerwuj samochód teraz
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar>
			</p>
		</Jumbotron>
	);
}

function Text4() {
	return (
		<div align="center">
			<h1>Lorem Ipsum</h1>
			<Table>
				<thead>
					<tr>
						<th>
							<img src={img_home_rental_1} width={550} alt="" />
						</th>
						<th>
							<img src={img_home_rental_2} width={620} alt="" />
						</th>
					</tr>
				</thead>
			</Table>

			<p>
				"At vero eos et accusamus et iusto odio dignissimos ducimus qui
				blanditiis praesentium voluptatum deleniti atque corrupti quos
				dolores et quas molestias excepturi sint occaecati cupiditate
				non provident, similique sunt in culpa qui officia deserunt
				mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio. Nam libero tempore,
				cum soluta nobis est eligendi optio cumque nihil impedit quo
				minus id quod maxime placeat facere possimus, omnis voluptas
				assumenda est, omnis dolor repellendus. Temporibus autem
				quibusdam et aut officiis debitis aut rerum necessitatibus saepe
				eveniet ut et voluptates repudiandae sint et molestiae non
				recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
				ut aut reiciendis voluptatibus maiores alias consequatur aut
				perferendis doloribus asperiores repellat."
			</p>
			<Navbar>
				<Nav fill variant="pills" defaultActiveKey="/booking">
					<Nav.Link as={Link} to="/booking">
						<Button variant="dark" size="lg">
							Zarezerwuj samochód teraz
						</Button>
					</Nav.Link>
				</Nav>
			</Navbar>
			{/* <img src={img_home_banner} width={1000} alt="" align="center" /> */}
		</div>
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
					<img src={img_home_carousel_1} width={1170} alt="" />
				</Carousel.Item>
				<Carousel.Item>
					{" "}
					<img src={img_home_carousel_2} width={1170} alt="" />
				</Carousel.Item>
				<Carousel.Item>
					{" "}
					<img src={img_home_carousel_3} width={1170} alt="" />
				</Carousel.Item>
				<Carousel.Item>
					{" "}
					<img src={img_home_carousel_4} width={1170} alt="" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

function BR() {
	return (
		<>
			<br /> <br /> <br />
		</>
	);
}

export default function Home() {
	return (
		<>
			<BR />
			<Text2 />
			<HomeCarousel />
			<BR />
			<Text4 />
			<Navbar fixed="bottom" bg="light">
				<img src={logo} width="50" height="50" alt="" />
				<h3>HIRD GYLDA HIRTIR</h3>
			</Navbar>
		</>
	);
}
