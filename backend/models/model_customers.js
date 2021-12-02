module.exports = (mongoose) => {
	var schema = mongoose.Schema("customers", {
		name: {
			type: String,
		},
		surmane: {
			type: String,
		},
		phone: {
			type: String,
		},
		email: {
			type: String,
		},
		driving_license: {
			type: Number,
		},
		street: {
			type: String,
		},
		street_number: {
			type: Number,
		},
		postcode: {
			type: Number,
		},
		city: {
			type: String,
		},
	});

	schema.method("toJSON", function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});
	const customers = mongoose.model("customers", schema);

	return customers;
};
