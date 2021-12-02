import carsDAO from "../dao/carsDAO.js";

export default class carsController {
	static async apiGetCars(req, res, next) {
		const carsPerPage = req.query.carsPerPage
			? parseInt(req.query.carsPerPage)
			: 10;
		const page = req.query.page ? parseInt(req.query.page, 10) : 0;
		let filters = {};

		if (req.query.make) {
			filters.make = req.query.make;
		} else if (req.query.model) {
			filters.model = req.query.model;
		} else if (req.query.type) {
			filters.type = req.query.type;
		} else if (req.query.price_per_day) {
			filters.price_per_day = req.query.price_per_day;
		} else if (req.query.id) {
			filters.id = req.query.id;
		}

		const { carsList, totalCarsNumber } = await carsDAO.getCars({
			filters,
			page,
			carsPerPage,
		});

		let response = {
			cars: carsList,
			page: page,
			filters: filters,
			totalCarsNumber: carsPerPage,
			total_result: totalCarsNumber,
		};

		res.json(response);
	}
}
