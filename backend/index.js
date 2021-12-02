import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import carsDAO from "./dao/carsDAO.js";
// import customersDAO from "./dao/customersDAO.js";
import rentalsDAO from "./dao/rentalsDAO.js";

dotenv.config();
const mongoClient = mongodb.MongoClient;

const carPort = process.env.PORT; // 5000
const rentalsPort = 5001;
const customersPort = 5002;

// https://dev.to/ziishaned/open-multiple-mongodb-connection-in-express-js-app-36be
mongoClient
	.connect(process.env.CARS_URI, {
		poolSize: 10,
		wtimeout: 2500,
		useNewUrlParser: true,
	})
	.catch((err) => {
		console.log(err.stack);
		process.exit(1);
	})
	.then(async (client) => {
		await carsDAO.injectDB(client);
		app.listen(carPort, () => {
			`listening on ${carPort}`;
		});
	});

mongoClient
	.connect(process.env.RENTALS_URI, {
		poolSize: 10,
		wtimeout: 2500,
		useNewUrlParser: true,
	})
	.catch((err) => {
		console.log(err.stack);
		process.exit(1);
	})
	.then(async (client) => {
		await rentalsDAO.injectDB(client);
		app.listen(rentalsPort, () => {
			`listening on ${rentalsPort}`;
		});
	});

// mongoClient
// 	.connect(process.env.CUSTOMERS_URI, {
// 		poolSize: 10,
// 		wtimeout: 2500,
// 		useNewUrlParser: true,
// 	})
// 	.catch((err) => {
// 		console.log(err.stack);
// 		process.exit(1);
// 	})
// 	.then(async (client) => {
// 		await customersDAO.injectDB(client);
// 		app.listen(customersPort, () => {
// 			`listening on ${customersPort}`;
// 		});
// 	});
