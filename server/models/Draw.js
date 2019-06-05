const mongoose = require('mongoose');

const DrawSchema = new mongoose.Schema({
	number: {
		type: Number,
		default: 0,	
	},
	doc_ID:{
		type: String,
		default: '',
	}
});

module.exports = mongoose.model('Draw', DrawSchema);
