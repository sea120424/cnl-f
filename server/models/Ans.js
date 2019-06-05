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

const AnsSchema = new mongoose.Schema({
	doc_ID: {
		type: String,
		default: '',	
	},
	title: {
		type: String,
		default: '',
	},
	illustion: {
		type: String,
		default: '',
	},
	answers: [AnsPartialSchema],
	user_ID: {
		type: String,
		default: '',
	},
	isFilled: {
		type: Boolean,
		default: false,
	},
	ishit: {
		type: Boolean,
		default: false,
	}
});
/*
UserSchema.methods.generateHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

UserSchema.methods.validPassword = function (password) {
  console.log(this.password);
  return bcrypt.compareSync(password, this.password);
};
*/
AnsSchema.methods.validAnswer = function (answers){
	for(i=0; i<question_number; i++){
		if(answers[i].answer.length < answers[i].limit){
			return false;
		}
	}
	return true;
}


module.exports = mongoose.model('Ans', AnsSchema);


