import express from "express";
import rentalsController from "../controllers/rentals_controller.js";

const router = express.Router();
router.route("/").get(rentalsController.apiGetRentals);

router
	.route("/rental")
	.post(rentalsController.apiPostRental)
	.put(rentalsController.apiUpdateReview)
	.delete(rentalsController.apiDeleteRental);

export default router;
