import http from "./http-common";
// Linki
// 1) https://youtu.be/mrHNSanmqQ4?t=5251

class CarDataService {
	getAllCars(page = 0) {
		return http.get(`/cars/?page=${page}`);
	}

	getCarsOfType(carType, page = 0) {
		return http.get(`/cars/?type=${carType}&page=${page}`);
	}

	getOneCar(id) {
		return http.get(`/cars/_id/${id}`);
	}

	findOneCar(query, by = "type", page = 0) {
		return http.get(`/cars?${by}=${query}&page=${page}`);
	}
}

export default new CarDataService();
