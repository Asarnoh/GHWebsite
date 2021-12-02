import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:5000/api/v1/", //było "/cars" z tyłu, wazne!
	headers: {
		"Content-type": "application/json",
	},
});
