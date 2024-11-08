const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({

	title: {
		type: String,
	},
	content: {
		type: String,
	},
	closingDate: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
