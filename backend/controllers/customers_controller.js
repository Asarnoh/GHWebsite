import customersDAO from "../dao/customersDAO.js";

export default class customersController {
	static async apiGetCustomers(req, res, next) {
		const customersPerPage = req.query.customersPerPage
			? parseInt(req.query.customersPerPage)
			: 10;
		const page = req.query.page ? parseInt(req.query.page, 10) : 0;
		let filters = {};

		if (req.query.make) {
			filters.make = req.query.make;
		} else if (req.query.model) {
			filters.make = req.query.model;
		} else if (req.query.type) {
			filters.make = req.query.type;
		} else if (req.query.price_per_day) {
			filters.make = req.query.price_per_day;
		}

		const { customersList, totalCustomersNumber } =
			await customersDAO.getCustomers({
				filters,
				page,
				carsPerPage,
			});

		let response = {
			cars: customersList,
			page: page,
			totalCarsNumber: customersPerPage,
			total_result: totalCustomersNumber,
		};

		res.json(response);
	}
}
