import rentalsDAO from "../dao/rentalsDAO.js";

export default class rentalsController {
	static async apiGetRentals(req, res, next) {
		const rentalsPerPage = req.query.rentalsPerPage
			? parseInt(req.query.rentalsPerPage)
			: 90;
		const page = req.query.page ? parseInt(req.query.page, 90) : 0;

		let filters = {};
		if (req.query._id) {
			filters._id = req.query._id;
		} else if (req.query.customer_id) {
			filters.customer_id = req.query.customer_id;
		} else if (req.query.car_id) {
			filters.car_id = req.query.car_id;
		} else if (req.query.start_date) {
			filters.start_date = req.query.start_date;
		} else if (req.query.end_date) {
			filters.end_date = req.query.end_date;
		}

		const { rentalsList, totalRentalsNumber } = await rentalsDAO.getRentals(
			{
				filters,
				page,
				rentalsPerPage,
			}
		);

		let response = {
			rentals: rentalsList,
			page: page,
			filters: filters,
			totalRentalsNumber: rentalsPerPage,
			total_result: totalRentalsNumber,
		};

		res.json(response);
	}

	static async apiPostRental(req, res, next) {
		try {
			const _id = req.body._id;
			const customer_id = req.body.customer_id;
			const car_id = req.body.car_id;
			const begin_date = req.body.begin_date;
			const end_date = req.body.end_date;

			const rentalResponse = await rentalsDAO.addRental(
				_id,
				customer_id,
				car_id,
				begin_date,
				end_date
			);

			res.json({ status: "success" });
		} catch (err) {
			res.status(500).json({
				error:
					`Tutaj wysyłanie do bazy, jakis błąd jest: ` + err.message,
			});
		}
	}

	static async apiUpdateReview(req, res, next) {
		try {
			const _id = req.body._id;
			const customer_id = req.body.customer_id;
			const car_id = req.body.car_id;
			const begin_date = re.body.begin_date;
			const end_date = re.body.end_date;

			const rentalResponse = await rentalsDAO.updateRental(
				_id,
				customer_id,
				car_id,
				begin_date,
				end_date
			);

			var { error } = rentalResponse;
			if (error) {
				res.status(400).json({ error });
			}

			if (rentalResponse.modifiedCount === 0) {
				throw new Error("Nie ma takiej rezerwacji");
			}

			res.json({ status: "success" });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}

	static async apiDeleteRental(req, res, next) {
		try {
			const _id = req.body._id;
			const customer_id = req.body.customer_id;
			const car_id = req.body.car_id;

			const rentalResponse = await rentalsDAO.deleteRental(
				_id,
				customer_id,
				car_id
			);

			res.json({ status: "deleted successfully" });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}
}
