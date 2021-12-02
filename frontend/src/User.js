import React, { useState, useEffect } from "react";
import {
	Button,
	FormControl,
	InputGroup,
	Table,
	Row,
	Col,
} from "react-bootstrap";
import RentalDataService from "./service_rentals.js";
import { Avatar, Paper } from "@material-ui/core";

const example_price_per_day = 10;
const oned = 24 * 60 * 60 * 1000;

const UserHello = (props) => {
	return (
		<h1 style={{ paddingTop: "100px", paddingLeft: "30px" }}>
			Hej, {props.userName}!
		</h1>
	);
};

const LoginWarning = () => {
	return (
		<h1 style={{ paddingTop: "100px", paddingLeft: "30px" }}>
			Proszę się zalogować!
		</h1>
	);
};

const CarReservationsCard = (rental) => {
	return (
		<div style={{ paddingTop: "30px" }}>
			<Paper elevation={3}>
				<Row>
					<Col style={{ paddingTop: "10px" }}>
						<h5 style={{ paddingLeft: "30px" }}>Od</h5>
					</Col>
					<Col>{rental.start_date}</Col>
					<Col style={{ paddingTop: "10px" }}>
						<h5 style={{ paddingLeft: "40px" }}>Do</h5>
					</Col>
					<Col>{rental.end_date}</Col>
				</Row>
				<Row>
					<Col style={{ paddingTop: "10px" }}>
						<h5 style={{ paddingLeft: "30px" }}>Cena całkowita</h5>
					</Col>
					<Col style={{ paddingTop: "10px" }}>
						{Math.ceil(
							(rental.end_date - rental.start_date) / oned
						) * example_price_per_day}{" "}
						€
					</Col>
					<Col style={{ paddingTop: "10px" }}>
						<h5 style={{ paddingLeft: "20px" }}>ID samochodu</h5>
					</Col>
					<Col style={{ paddingTop: "10px" }}>{rental.car_id}</Col>
				</Row>
			</Paper>
		</div>
	);
};

const UserShowReservations = () => {
	const [isClicked, setClicked] = useState(false);
	const [rentals, setRentals] = useState([]);

	useEffect(() => {
		retrieveRentals();
	}, []);

	const retrieveRentals = () => {
		RentalDataService.findAllRentals()
			.then((response) => {
				console.log(response.data);
				setRentals(response.data.rentals);
			})
			.catch((err) => {
				console.log(`error: ${err}`);
			});
	};

	const reservationsList = rentals.map((rental) => (
		<ul>
			<CarReservationsCard
				start_date={rental.start_date}
				end_date={rental.end_date}
				car_id={rental.car_id}
			/>
		</ul>
	));

	return (
		<div>
			<Button
				size="lg"
				variant="success"
				onClick={(event) => {
					setClicked((isClicked) => !isClicked);
					retrieveRentals();
				}}
			>
				{isClicked ? "Ukryj rezerwacje" : "Pokaz rezerwacje"}
			</Button>

			{isClicked ? <>{reservationsList}</> : <></>}
		</div>
	);
};

const NewUserProfile = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);

	const userName = user?.response?.name;
	const userImageUrl = user?.response?.imageUrl;
	const avatar = (
		<Avatar
			alt={userName}
			style={{ height: "140px", width: "140px" }}
			src={userImageUrl}
		></Avatar>
	);

	return (
		<div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
			<Paper
				elevation={3}
				style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
			>
				<Paper
					elevation={3}
					style={{ backgroundColor: "rgba(180, 180, 180, 1)" }}
				>
					<Row
						style={{
							paddingTop: "30px",
							paddingBottom: "30px",
							paddingLeft: "30px",
							paddingRight: "30px",
						}}
					>
						<Col>{avatar}</Col>
						<Col>
							<Row>Email</Row>
							<Row>
								<FormControl
									placeholder=""
									aria-label=""
									aria-describedby="basic-addon1"
									defaultValue={user?.response.email}
								/>
							</Row>

							<Row style={{ paddingTop: "20px" }}>
								Numer prawa jazdy
							</Row>
							<Row>
								<FormControl
									placeholder=""
									aria-label=""
									aria-describedby="basic-addon1"
									defaultValue={user?.response.googleId}
								/>
							</Row>
						</Col>
						<Col>
							<Row>Imię</Row>
							<Row>
								<FormControl
									placeholder=""
									aria-label=""
									aria-describedby="basic-addon1"
									defaultValue={user?.response.givenName}
								/>
							</Row>

							<Row style={{ paddingTop: "20px" }}>Nazwisko</Row>
							<Row>
								<FormControl
									placeholder=""
									aria-label=""
									aria-describedby="basic-addon1"
									defaultValue={user?.response.familyName}
								/>
							</Row>
						</Col>
					</Row>
				</Paper>
				<Row
					style={{
						paddingTop: "30px",
						paddingBottom: "30px",
						paddingLeft: "30px",
						paddingRight: "30px",
					}}
				>
					<UserShowReservations />
				</Row>
			</Paper>
		</div>
	);
};
export default function User() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);

	const userName = user?.response?.givenName;

	return (
		<>
			{user ? (
				<>
					<UserHello userName={userName} />
					<NewUserProfile />
				</>
			) : (
				<LoginWarning />
			)}
		</>
	);
}
