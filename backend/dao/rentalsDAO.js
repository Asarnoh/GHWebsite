let rentals;

export default class rentalsDAO {
	static async injectDB(conn) {
		if (rentals) {
			return;
		}
		try {
			rentals = await conn
				.db(process.env.RENTALS_NS)
				.collection("rentals");
		} catch (err) {
			console.error(`Error: ${err} in rentalsDAO.js`);
		}
	}

	static async addRental(
		_id = null,
		customer_id,
		car_id,
		begin_date,
		end_date
	) {
		try {
			const rentalDoc = {
				_id: _id,
				customer_id: customer_id,
				car_id: car_id,
				begin_date: begin_date,
				end_date: end_date,
			};
			return await rentals.insertOne(rentalDoc);
		} catch (err) {
			console.error(`Nie udało się dodać wypozyczenia: ${err}`);
			return { error: err };
		}
	}

	static async getRentals({
		filters = null,
		page = 0,
		rentalsPerPage = 90,
	} = {}) {
		let query;
		if (filters) {
			if ("_id" in filters) {
				query = { $text: { $search: filters["_id"] } };
			} else if ("customer_id" in filters) {
				query = { customer_id: { $eq: filters["customer_id"] } };
			} else if ("car_id" in filters) {
				query = { car_id: { $eq: filters["car_id"] } };
			} else if ("begin_date" in filters) {
				query = { begin_date: { $eq: filters["begin_date"] } };
			} else if ("end_date" in filters) {
				query = { end_date: { $eq: filters["end_date"] } };
			}
		}

		let cursor;
		try {
			cursor = await rentals.find(query);
		} catch (err) {
			console.error(`Error: ${err} in rentalsDAO.js`);
			return { error: err };
		}

		const displayCursor = cursor
			.limit(rentalsPerPage)
			.skip(rentalsPerPage * page);

		try {
			const rentalsList = await displayCursor.toArray();
			const totalNumRentals = await rentals.countDocuments(query);

			return { rentalsList, totalNumRentals };
		} catch (err) {
			console.error(`Error: ${err} in rentalsDAO.js`);
			return { rentalsList: [], totalNumRentals: 0 };
		}
	}

	static async updateRental(
		_id,
		customer_id = null,
		car_id = null,
		begin_date = null,
		end_date = null
	) {
		try {
			const updateRental = await rentals.updateOne(
				{ _id: ObjectId(rentalId) },
				{
					$set: {
						customer_id: customer_id,
						car_id: car_id,
						begin_date: begin_date,
						end_date: end_date,
					},
				}
			);
			return updateRental;
		} catch (err) {
			console.error(`Error: ${err} in rentalsDAO.js`);
			return { error: err };
		}
	}

	static async deleteRental(_id) {
		try {
			const deleteRental = await rentals.deleteOne({
				_id: ObjectId(_id),
			});
			return deleteRental;
		} catch (err) {
			console.error(`Error: ${err} in rentalsDAO.js`);
			return { error: err };
		}
	}
}
