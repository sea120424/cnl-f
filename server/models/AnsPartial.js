const mongoose = require('mongoose');

const AnsPartialSchema = new mongoose.Schema({
	questions: {
		type: String,
		default: ''	
	},
	answer: {
		type: String,
		default: '',	
	},
	limit: {
		type: Number,
		default: 0,
	},

});


module.exports = mongoose.model('AnsPartial', AnsPartialSchema);


