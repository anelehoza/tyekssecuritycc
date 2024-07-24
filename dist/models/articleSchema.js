const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	content: {
		type: String,
	},
	category: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	image: {
		type: String,
		data: Buffer,
	},
});

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;
