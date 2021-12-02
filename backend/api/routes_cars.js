import express from "express";
import carsController from "../controllers/cars_controller.js";

const router = express.Router();
router.route("/").get(carsController.apiGetCars);

export default router;
