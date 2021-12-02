import http from "./http-common";

class CustomerDataService {
	createCustomer(data) {
		return http.post("/customers", data);
	}

	findAllCustomers() {
		return http.get("/customers");
	}

	findOneCustomer(id) {
		return http.get(`/customers/${id}`);
	}

	deleteCustomer(id) {
		return http.delete(`/customers/${id}`);
	}
}

export default new CustomerDataService();
