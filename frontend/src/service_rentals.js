import http from "./http-common";

class RentalDataService {
	createRental(data) {
		return http.post("/rentals/rental", data);
	}

	findAllRentals() {
		return http.get("/rentals");
	}

	findOneRental(id) {
		return http.get(`/rentals/${id}`);
	}

	deleteRental(id) {
		return http.delete(`/rentals/${id}`);
	}
}

export default new RentalDataService();
