import express from "express";
import customersController from "../controllers/customers_controller.js";

const router = express.Router();
router.route("/").get(customersController.apiGetCustomers);
// router.route("/register").post(customersController.apiPostCustomer);

export default router;
