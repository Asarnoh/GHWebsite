// https://mongoosejs.com/docs/schematypes.html

module.exports = (mongoose) => {
	var schema = mongoose.Schema("cars", {
		type: {
			type: String,
		},
		make: {
			type: String,
		},
		model: {
			type: String,
		},
		price_per_day: {
			type: Number,
		},
	});

	schema.method("toJSON", function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});
	const cars = mongoose.model("cars", schema);
	return cars;
};
