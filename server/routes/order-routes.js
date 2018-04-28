const Orders = require('./../models/orders-server-model.js');
//creates v4 (random) id

module.exports = (app) => {
	app.post('/categories/:product', (req, res, next)=>{
		const order = new Orders();
		order.statusType = "active";
		console.log(req.body)
		totalPrice = 0;
		order.items.push({
			name: req.body.name,
			price: req.body.price,
			weight: req.body.weight,
			unit: req.body.unit,
			amount: req.body.amount  

		})
		var subdoc = order.items[0];
		console.log(subdoc)
		subdoc.isNew;
		order.save()
			.then(() => {
				res.json(order)
				console.log('success');
			})
      		.catch((err) => next(err));

	})
	app.put('/categories/:product', (req, res, next)=>{


	})

	app.get('/cart', (req, res, next) => {
		const category = req.params.product
		const array = [];
		Orders.findOne({ "statusType": "active"})
			//.select('name')
			.lean()
		  	.exec((err, doc) => {
		  		if(doc !== null){
		  			res.json({orders: doc });
		  		}else{
		  			res.json({orders: {} });
		  		}
				
				if(err){
					return next(new Error('Failed to get Category'));
				}
		  	});
	})

	app.delete('/cart', (req, res, next) => {
		
		const orderId = req.body.orderId;
		console.log(orderId);
		Orders.findOne({ "_id": req.body.orderId })
			.exec((err,doc) => {
				console.log(doc)
				let item = doc.items.id(req.body.itemId).remove();
				doc.save()
					.catch((err) => next(err));
				res.json({order: doc });
				if(err){
					return next(new Error('Failed removing item'));
				}
			})
	})

	app.delete('/cart', (req, res, next) => {
		
	})
}