import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, FormControl } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import avatar from "./images/img_avatar.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function BR() {
	return (
		<>
			<br /> <br /> <br />
		</>
	);
}

function EditRental() {
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">Imię</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary">Edytuj</Button>
				</InputGroup.Append>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">
						Nazwisko
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary">Edytuj</Button>
				</InputGroup.Append>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">
						Adres email
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary">Edytuj</Button>
				</InputGroup.Append>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">Hasło</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary">Edytuj</Button>
				</InputGroup.Append>
			</InputGroup>
			<div align="center">
				<SaveUserButton />
			</div>
		</>
	);
}

class SaveUserButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showComponentSave: false,
		};

		this._onButtonClickSave = this._onButtonClickSave.bind(this);
	}
	_onButtonClickSave() {
		this.setState({
			showComponentAreSave: true,
		});
	}

	render() {
		return (
			<div align="center">
				<Button
					size="lg"
					variant="success"
					onClick={this._onButtonClickSave}
				>
					Zapisz
				</Button>{" "}
			</div>
		);
	}
}

function RemoveRental() {
	return (
		<>
			<h2>Wpisz ponizej dane rezerwacji, którą chcesz usunąć</h2>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">Imię</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					aria-label="Name"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">
						Nazwisko
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					aria-label="Surname"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">
						Adres email
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					aria-label="Email"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl aria-label="ID" aria-describedby="basic-addon1" />
			</InputGroup>
			<div align="center">
				<RemoveRentalButton />
			</div>
		</>
	);
}

class RemoveRentalButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showComponentAreYouSure: false,
		};

		this._onButtonClickAreYouSure =
			this._onButtonClickAreYouSure.bind(this);
	}
	_onButtonClickAreYouSure() {
		this.setState({
			showComponentAreYouSure: true,
		});
	}

	render() {
		return (
			<div align="center">
				<Button
					size="lg"
					variant="outline-danger"
					onClick={this._onButtonClickAreYouSure}
				>
					{this.state.showComponentAreYouSure
						? "Czy na pewno chcesz usunąć rezerwację?"
						: "Usuń rezerwację"}
				</Button>{" "}
				{this.state.showComponentAreYouSure ? (
					<>
						<Button size="lg" variant="danger" block>
							Tak, chcę usunąć rezerwację
						</Button>{" "}
					</>
				) : null}
			</div>
		);
	}
}

export default class Admin extends React.Component {
	// const [key, setKey] = useState('add');

	constructor(props) {
		super(props);

		this.state = {
			showComponentAdd: false,
			showComponentEdit: false,
			showComponentRemove: false,
		};

		this._onButtonClickAdd = this._onButtonClickAdd.bind(this);
		this._onButtonClickEdit = this._onButtonClickEdit.bind(this);
		this._onButtonClickRemove = this._onButtonClickRemove.bind(this);
	}

	_onButtonClickAdd() {
		this.setState({
			showComponentAdd: true,
		});
	}
	_onButtonClickEdit() {
		this.setState({
			showComponentEdit: true,
		});
	}
	_onButtonClickRemove() {
		this.setState({
			showComponentRemove: true,
		});
	}

	render() {
		return (
			<>
				<div style={{ paddingTop: "90px" }}>
					<BR />
					<h1> Panel administratora </h1>
					<Table striped bordered hover>
						<tbody>
							<tr>
								<td>
									{" "}
									<Image
										src={avatar}
										roundedCircle
										fluid
										width={150}
									/>
								</td>
								<td>
									<InputGroup className="mb-3">
										<InputGroup.Prepend>
											<InputGroup.Text id="basic-addon1">
												Adres email
											</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl
											placeholder="Username"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
										<InputGroup.Append>
											<Button variant="outline-secondary">
												Edytuj
											</Button>
										</InputGroup.Append>
									</InputGroup>
									<InputGroup className="mb-3">
										<InputGroup.Prepend>
											<InputGroup.Text id="basic-addon1">
												Hasło
											</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl
											placeholder="Username"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
										<InputGroup.Append>
											<Button variant="outline-secondary">
												Edytuj
											</Button>
										</InputGroup.Append>
									</InputGroup>
								</td>
								<td>
									<InputGroup className="mb-3">
										<InputGroup.Prepend>
											<InputGroup.Text>
												Imię i nazwisko
											</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl />
										<InputGroup.Append>
											<Button variant="outline-secondary">
												Edytuj
											</Button>
										</InputGroup.Append>
										<FormControl />
									</InputGroup>
								</td>
							</tr>
						</tbody>
					</Table>
					<br />
					<div align="center">
						<Tabs
							id="controlled-tab-example"
							// activeKey={key}
							// onSelect={(k) => setKey(k)}
						>
							<Tab eventKey="edit" title="Edytuj">
								<Button
									size="lg"
									variant="warning"
									onClick={this._onButtonClickEdit}
								>
									Edytuj rezerwacje
								</Button>{" "}
							</Tab>
							<Tab eventKey="remove" title="Usuń">
								<Button
									size="lg"
									variant="danger"
									onClick={this._onButtonClickRemove}
								>
									Usuń rezerwacje
								</Button>{" "}
							</Tab>
						</Tabs>
					</div>
					{this.state.showComponentEdit ? <EditRental /> : null}
					{this.state.showComponentRemove ? <RemoveRental /> : null}
				</div>
			</>
		);
	}
}
