// Linki
// 1)  https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re
// 2) https://www.codegrepper.com/code-examples/javascript/calculate+days+between+two+dates+in+react+js
// 3) https://www.w3schools.com/react/react_css.asp
// 4) https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c
// 5) https://github.com/yezyilomo/state-pool
// 6) https://www.npmjs.com/package/react-datepicker
// 7) https://github.com/charlesStover/reactn#install
import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import DatePicker from "react-datepicker"; //6)
import { Link } from "react-router-dom";
import { registerLocale } from "react-datepicker";
import sv from "date-fns/locale/sv";
import "react-datepicker/dist/react-datepicker.css";
import "w3-css/w3.css";
import car_class_A from "./images/img_car_class_A.png";
import car_class_B from "./images/img_car_class_B.png";
import car_class_C from "./images/img_car_class_C.png";
import car_class_D from "./images/img_car_class_D.png";
import car_class_J from "./images/img_car_class_J.png";
import car_class_M from "./images/img_car_class_M.png";
import mini_logo from "./images/img_logo_mini.png";
import volvo_logo from "./images/img_logo_volvo.jpg";
import renault_logo from "./images/img_logo_renault.png";
import ford_logo from "./images/img_logo_ford.png";
import mazda_logo from "./images/img_logo_mazda.png";
import saab_logo from "./images/img_logo_saab.png";
import smart_logo from "./images/img_logo_smart.png";
import CarDataService from "./service_cars.js";
import RentalDataService from "./service_rentals.js";
import { Paper } from "@material-ui/core";

registerLocale("sv", sv);

// "Global" variables
const oned = 24 * 60 * 60 * 1000;
let total_price = 0;

const LoginWarning = () => {
	return (
		<h1 style={{ paddingTop: "100px", paddingLeft: "30px" }}>
			Proszę się zalogować!
		</h1>
	);
};

function BookingMainComponent(props) {
	const [cars, setCars] = useState([]);
	const [isClicked, setClicked] = useState(false);
	const [isSelectedCar, setIsSelectedCar] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [selectedCar, setSelectedCar] = useState(null);
	const [show, setShow] = useState(true);
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);
	console.log(user?.response);

	useEffect(() => {
		retrieveCars();
	}, []);

	const onChangeCars = (e) => {
		const cars = Array.from(e.target.value);
		setCars(cars);
	};

	const createRental = (rental, start_date, end_date) => {
		let i_customer_id = Math.floor(Math.random() * 10) + 1;
		var data = {
			car_id: rental._id,
			customer_id: i_customer_id,
			start_date: start_date,
			end_date: end_date,
		};
		console.log(
			`Data in createRental. \
			\ncar_id = ${data.car_id}, 
			\ncustomer_id = ${user?.response.googleId}, 
			\nstart_date = ${data.start_date},
			\nend_date = ${data.end_date}`
		);

		RentalDataService.createRental(data)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(`error: ${err}`);
			});
	};

	const retrieveCars = () => {
		CarDataService.getAllCars()
			.then((response) => {
				console.log(response.data);
				setCars(response.data.cars);
			})
			.catch((err) => {
				console.log(`error: ${err}`);
			});
	};

	const findByType = (query) => {
		// find(searchType, "type");
		CarDataService.getCarsOfType(query)
			.then((response) => {
				console.log(response.data);
				setCars(response.data.cars);
			})
			.catch((err) => {
				console.log(`error: ${err}`);
			});
	};

	const onCarSelected = (event, selectedCar) => {
		event.preventDefault();
		setSelectedCar(selectedCar);
		console.log("onCarSelected fired!");
		console.log(event);
		console.log(selectedCar);
		// const rented_car = {
		// 	_id: selectedCar._id,
		// 	customer_id: Math.floor(Math.random() * 10) + 1,
		// 	car_id: selectedCar.car_id,
		// 	start_date: startDate,
		// 	end_date: endDate,
		// };
		// createRental(rented_car);
	};

	const carList = cars.map((exampleCar) => (
		<li
			key={exampleCar.toString()}
			style={{
				paddingTop: "15px",
				paddingBottom: "15px",
			}}
		>
			<Paper elevation={3}>
				<Row>
					<Col>
						<Image
							src={
								exampleCar.make_name === "Volvo"
									? volvo_logo
									: exampleCar.make_name === "Mini"
									? mini_logo
									: exampleCar.make_name === "Renault"
									? renault_logo
									: exampleCar.make_name === "Ford"
									? ford_logo
									: exampleCar.make_name === "Saab"
									? saab_logo
									: exampleCar.make_name === "Mazda"
									? mazda_logo
									: exampleCar.make_name === "Smart"
									? smart_logo
									: null
							}
							height={100}
							style={{ paddingLeft: "35px", paddingTop: "15px" }}
						/>
					</Col>

					<Col>
						<h2>{exampleCar.make_name}</h2>
					</Col>

					<Col>
						<h3>{exampleCar.model_name}</h3>
					</Col>
				</Row>
				<Row>
					<Col style={{ paddingLeft: "35px" }}>
						<h3 style={{ fontStyle: "italic" }}>
							Cena za jeden dzień: {exampleCar.price_per_day}€
						</h3>
					</Col>
					<Col>
						<Button
							variant="success"
							style={{ position: "relative", left: "20px" }}
							onClick={(event) => {
								console.log("selected car" + { exampleCar });
								onCarSelected(event, exampleCar);
								setIsSelectedCar(
									(isSelectedCar) => !isSelectedCar
								);
							}}
						>
							Wybierz
						</Button>
					</Col>
				</Row>
				<Row>
					<Col style={{ paddingLeft: "35px" }}>
						<h3 style={{ fontWeight: "bold" }}>
							Cena całkowita wypożyczenia:
							{
								(total_price =
									Math.ceil((endDate - startDate) / oned) *
									exampleCar.price_per_day)
							}
							€
						</h3>
					</Col>
				</Row>
			</Paper>
		</li>
	));

	return (
		<div>
			<h1>Wybór samochodu</h1>

			<Paper
				elevation={3}
				style={{
					paddingTop: "90px",
					paddingBottom: "50px",
					paddingLeft: "70px",
				}}
			>
				<Row>
					<h3>Wybór daty</h3>
				</Row>
				<Row>
					<Col>
						<DatePicker
							locale="sv"
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
							}}
						/>
						<DatePicker
							locale="sv"
							selected={endDate}
							onChange={(date) => {
								setEndDate(date);
							}}
						/>
					</Col>
				</Row>
				{endDate < startDate || endDate === startDate ? (
					<>
						<Alert show={show} variant="danger">
							<Alert.Heading>Uwaga!</Alert.Heading>
							<p>
								{endDate < startDate
									? "Data zwrotu samochodu nie moze być wczesniejsza niz data wypozyczenia."
									: endDate === startDate
									? "Musimy przygotować samochód do wypozyczenia, nie mozesz wybrac daty wypozyczenia w tym samym dniu"
									: null}
							</p>
							<hr />
							<div className="d-flex justify-content-end">
								<Button
									onClick={() => setShow(false)}
									variant="outline-danger"
								>
									OK
								</Button>
							</div>
						</Alert>
					</>
				) : (
					<>
						<Row style={{ paddingTop: "30px" }}>
							<h3>Wybór klasy samochodu</h3>
						</Row>
						<Row>
							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("A");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa A</h3>
									<img
										src={car_class_A}
										width={350 / 2}
										height={200 / 2}
										alt=""
									/>
								</Button>
							</Col>

							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("B");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa B</h3>
									<img
										src={car_class_B}
										width={340 / 2}
										height={240 / 2}
										alt=""
									/>
								</Button>
							</Col>

							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("C");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa C</h3>
									<img
										src={car_class_C}
										width={500 / 2}
										height={200 / 2}
										alt=""
										style={{
											webkitTransform: "scaleX(-1)",
											transform: "scaleX(-1)",
										}}
									/>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("D");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa D</h3>
									<img
										src={car_class_D}
										width={500 / 2}
										height={200 / 2}
										alt=""
									/>
								</Button>
							</Col>
							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("J");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa J</h3>
									<img
										src={car_class_J}
										width={400 / 2}
										height={200 / 2}
										alt=""
									/>
								</Button>
							</Col>

							<Col>
								<Button
									variant="outline-light"
									onClick={() => {
										findByType("M");
										setClicked((isClicked) => !isClicked);
									}}
								>
									<h3>Klasa M</h3>
									<img
										src={car_class_M}
										width={370 / 2}
										height={200 / 2}
										alt=""
									/>
								</Button>
							</Col>
						</Row>
					</>
				)}
			</Paper>

			<ul
				onChange={onChangeCars}
				style={{ paddingTop: "30px", listStyleType: "none" }}
			>
				{isClicked ? (
					<>
						<Container style={{ paddingTop: "30px" }}>
							<Row>
								<Col>
									<h3>Wybór samochodu</h3>
								</Col>
								<Col>
									<DropdownButton
										menuAlign="right"
										title="Sortuj według"
										style={{
											position: "absolute",
											right: "10px",
										}}
									>
										<Dropdown.Item eventKey="1">
											Cena - malejąco
										</Dropdown.Item>
										<Dropdown.Item eventKey="2">
											Cena - rosnąco
										</Dropdown.Item>
										<Dropdown.Item eventKey="3">
											Marka - malejąco
										</Dropdown.Item>
										<Dropdown.Item eventKey="4">
											Marka - rosnąco
										</Dropdown.Item>
									</DropdownButton>
								</Col>
							</Row>
						</Container>

						<div align="center" style={{ width: "80rem" }}>
							{carList}
						</div>
					</>
				) : (
					<> </>
				)}
				{isSelectedCar ? (
					<>
						<div style={{ paddingTop: "30px" }}>
							<h3>Podsumowanie zamówienia</h3>

							<Paper elevation={3}>
								<Row>
									<Col>
										<Image
											style={{
												paddingTop: "15px",
												paddingLeft: "15px",
											}}
											src={
												selectedCar.make_name ===
												"Volvo"
													? volvo_logo
													: selectedCar.make_name ===
													  "Mini"
													? mini_logo
													: selectedCar.make_name ===
													  "Renault"
													? renault_logo
													: selectedCar.make_name ===
													  "Ford"
													? ford_logo
													: selectedCar.make_name ===
													  "Saab"
													? saab_logo
													: selectedCar.make_name ===
													  "Mazda"
													? mazda_logo
													: selectedCar.make_name ===
													  "Smart"
													? smart_logo
													: null
											}
											height={150}
										/>
									</Col>

									<Col>
										<h3>{selectedCar.make_name}</h3>
									</Col>

									<Col>
										<h3>{selectedCar.model_name}</h3>
									</Col>
								</Row>
								<Row>
									<Col sm></Col>
									<Col>
										<h3>Cena całkowita: {total_price}€</h3>
									</Col>
									<Col>
										<h3>
											{(endDate != null) &
											(startDate != null)
												? `Okres wypożyczenia: ${startDate.toLocaleDateString(
														"pl-pl"
												  )} - ${endDate.toLocaleDateString(
														"pl-pl" //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
												  )}`
												: "Coś nie tak"}
										</h3>
									</Col>
								</Row>
								<Row
									style={{
										paddingLeft: "15px",
										paddingBottom: "15px",
									}}
								>
									<Col>
										<Button
											variant="primary"
											as={Link}
											to="/"
											onClick={() =>
												createRental(
													selectedCar,
													startDate,
													endDate
												)
											}
										>
											Potwierdzam
										</Button>
									</Col>
								</Row>
							</Paper>
						</div>
					</>
				) : (
					<></>
				)}
			</ul>
		</div>
	);
}

export default function Booking() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);

	return (
		<>
			{user ? (
				<BookingMainComponent style={{ paddingTop: "90px" }} />
			) : (
				<LoginWarning />
			)}
		</>
	);
}
