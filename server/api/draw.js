const Draw = require('../../models/Draw');
const Ans = require('../../models/Ans');

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
};

module.exports = (app) => {
  //draw a seris of user
	app.get('/api/account/draw', (req, res, next) => {
		const body = req.body;
		const {
			number
		} = body;
		const {
			doc_ID
		} = body;

		Ans.find(
			{
				doc_ID: doc_ID,
			},
		(err, doc_list) => {
			if(err){
				//return res.status(500).send([]);
				return res.status(500).send({
					success: false,
					message: 'Error Server fail.'				
				})		
			}
			else if(doc_list.length === 0){
				return res.status(200).send({
					success: false,
					message: 'Error no one submit.'
				});			
			}
			else{
				console.log('now drawing');
				var hit_user_list = [];
				if(doc_list.length < number){
					for(i=0; i<number; i++){
						hit_user_list.push(doc_list[i].user_ID);				
					};
					return(hit_user_list);
				}
				else{
					doc_list.sort(function(){return Math.random()-0.5;})

					for(i=0; i<number; i++){
						hit_user_list.push(doc_list[i].user_ID);
					};
					return(hit_user_list);	
				}
			}		
		}	
		)
	})

};
