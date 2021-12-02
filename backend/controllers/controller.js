const db = require("../models");
const cars = db.cars;
const customers = db.customers;
const rentals = db.rentals;

const Op = db.Sequelize.Op;

////////////////////////////////////////////////////
//Creates
exports.createCustomer = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const customer = {
		name: req.body.name,
		surmane: req.body.surmane,
		phone: req.body.phone,
		email: req.body.email,
		driving_license: req.body.driving_license,
		street: req.body.street,
		street_number: req.body.street_number,
		postcode: req.body.postcode,
		city: req.body.city,
	};

	customers
		.save(customer)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the customer.",
			});
		});
};

exports.createCar = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({
			message: "Content cannot be empty!",
		});
		return;
	}

	const car = {
		type: req.body.type,
		make: req.body.make,
		model: req.body.model,
		price_per_day: req.body.price_per_day,
	};

	cars.save(car)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the car.",
			});
		});
};

exports.createRental = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const rental = {
		customer: req.body.customer,
		car: req.body.car,
		total_price: req.body.total_price,
	};

	rentals
		.save(rental)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Tutorial.",
			});
		});
};
////////////////////////////////////////////////////
//findAlls
exports.findAllCustomers = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	customers
		.find({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tutorials.",
			});
		});
};

exports.findAllRentals = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	rentals
		.find({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tutorials.",
			});
		});
};

exports.findAllCars = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	cars.find({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tutorials.",
			});
		});
};

////////////////////////////////////////////////////
//findOnes
exports.findOneCustomer = (req, res) => {
	const id = req.params.id;

	customers
		.findById(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};

exports.findOneCar = (req, res) => {
	const id = req.params.id;

	cars.findById(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};

exports.findOneRental = (req, res) => {
	const id = req.params.id;

	rentals
		.findById(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};
////////////////////////////////////////////////////
//deletes
exports.deleteCustomer = (req, res) => {
	const id = req.params.id;

	customers
		.findByIdAndRemove({
			where: { id: id },
		})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Tutorial was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Tutorial with id=" + id,
			});
		});
};

exports.deleteCar = (req, res) => {
	const id = req.params.id;

	cars.findByIdAndRemove({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Tutorial was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Tutorial with id=" + id,
			});
		});
};

exports.deleteRental = (req, res) => {
	const id = req.params.id;

	rentals
		.findByIdAndRemove({
			where: { id: id },
		})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Tutorial was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Tutorial with id=" + id,
			});
		});
};
