const Ans = require('../../models/Ans');
//const AnsPartial = require('../../models/AnsPartial');


module.exports = (app) => {
  //response the form
	app.post('/api/account/response', (req, res, next) => {
		//console.log(process.env.HOST)
		const body = req.body;
		console.log(body); // doc_ID, question_number, answers
		console.log("CTF{4m 4n U53r f1ll1n9 f07ms}");
		const {
			doc_ID
		} = body;
		
		const {
			user_ID		
		} = body

		let {
			answers
		} = body;
				
		if(!Ans.validAnswer(answers)){
			return res.send({
				success: false,
				message: 'Error: at least one of the answer does not meet the requirement.'
			});
		}
		Ans.find(
			{
				user_ID: user_ID,			
			},
			(err, prevUsers) => {
				console.log(prevUsers);
				if (err) {
         	 			return res.status(500).send({
            					message: 'Error: Server Error',
          				});
        			}
        			else if (prevUsers.length != 0) {
          				return res.status(200).send({
            					message: 'Error: You had filled this form'
          				})
        			}
			}
		);
		return res.status(200).send({
			success: true,
                	message: "submit_successfully",
		});
	
	});

	app.get('/api/account/all_form_require', (req, res, next) => {
		const body = req.body;
		const {
			doc_ID
		} = body;
		Ans.find(
			{
				doc_ID: doc_ID,
			},
		(err, doc_list) => {
			if(err){
				return res.status(500).send([]);			
			}
			else if(doc_list.length == 0){
				return res.status(200).send([]);			
			}
			else{
				return res.status(200).send(doc_list);
			}		
		}	
		)
	})

};
