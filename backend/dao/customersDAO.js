// import { query } from "express";

let customers;

export default class customersDAO {
	static async injectDB(conn) {
		if (customers) {
			return;
		}
		try {
			customers = await conn
				.db(process.env.CUSTOMERS_NS)
				.collection("customers");
		} catch (err) {
			console.error(`Error: ${err}`);
		}
	}

	static async getCustomers({
		filters = null,
		page = 0,
		customersPerPage = 10,
	} = {}) {
		let query, cursor;

		if (filters) {
			if ("make" in filters) {
				query = { $text: { $search: filters["make"] } };
			} else if ("model" in filters) {
				query = { $text: { $search: filters["model"] } };
			} else if ("type" in filters) {
				query = { $text: { $search: filters["type"] } };
			} else if ("price_per_day" in filters) {
				query = { $text: { $search: filters["price_per_day"] } };
			}
		}

		try {
			cursor = await customers.find(query);
		} catch (err) {
			console.error("Error: ${err}");
			return { customersList: [], totalCustomers: 0 };
		}

		const customersCursor = cursor
			.limit(customersPerPage)
			.skip(customersPerPage * page);
		try {
			const customersList = await customersCursor.toArray();
			const totalCustomers =
				page === 0 ? await customers.countDocuments(query) : 0;
			return { customersList, totalCustomers };
		} catch (err) {
			console.error("Error${err}");
			return { customersList: [], totalCustomers: 0 };
		}
	}
}
