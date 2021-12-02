//Uruchamiania mongo: mongod --config /opt/homebrew/etc/mongod.conf
//https://bezkoder.com/node-express-mongodb-crud-rest-api/

import express from "express";
import cors from "cors";
import cars from "./api/routes_cars.js";
// import customers from "./api/routes_customers.js";
import rentals from "./api/routes_rentals.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/cars", cars);
// app.use("/api/v1/customers", customers);
app.use("/api/v1/rentals", rentals);
app.use("*", (req, res) =>
	res.status(404).json({
		error: "Wrong path in the address bar. This error is from server.js file btw",
	})
);

export default app;
