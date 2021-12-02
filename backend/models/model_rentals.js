module.exports = (mongoose) => {
	var schema = mongoose.Schema("rentals", {
		_id: {
			type: Number,
		},
		customer_id: {
			type: Number,
		},
		car_id: {
			type: Number,
		},
		start_date: { type: Date },
		end_date: { type: Date },
	});

	schema.method("toJSON", function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});
	const rentals = mongoose.model("rentals", schema);

	return rentals;
};
