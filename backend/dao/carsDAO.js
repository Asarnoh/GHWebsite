let cars;

export default class carsDAO {
	static async injectDB(conn) {
		if (cars) {
			return;
		}
		try {
			cars = await conn.db(process.env.CARS_NS).collection("cars");
		} catch (err) {
			console.error(`Error: ${err}`);
		}
	}

	static async getCars({ filters = null, page = 0, carsPerPage = 10 } = {}) {
		let query, cursor;

		if (filters) {
			if ("make" in filters) {
				query = { $text: { $search: filters["make"] } };
			} else if ("model" in filters) {
				query = { model: { $eq: filters["model"] } };
			} else if ("type" in filters) {
				query = { type: { $eq: filters["type"] } };
			} else if ("price_per_day" in filters) {
				query = { price_per_day: { $eq: filters["price_per_day"] } };
			} else if ("id" in filters) {
				query = { id: { $eq: filters["id"] } };
			}
		}

		try {
			cursor = await cars.find(query);
		} catch (err) {
			console.error(`Error: ${err}`);
			return { carsList: [], totalCars: 0 };
		}

		const carCursor = cursor.limit(carsPerPage).skip(carsPerPage * page);

		try {
			const carsList = await carCursor.toArray();
			const totalCars = page === 0 ? await cars.countDocuments(query) : 0;
			return { carsList, totalCars };
		} catch (err) {
			console.error(`Error: ${err}`);
			return { carsList: [], totalCars: 0 };
		}
	}
}
