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
		Orders.find({ "statusType": "active"})
			//.select('name')
		  	.exec(function getProducts(err, docs){
				if(docs){
					docs.forEach(function(doc){
						array.push(doc);
					})
				}
				res.json({orders: array });
				if(err){
					return next(new Error('Failed to get Category'));
				}
		  	});
	})

	app.delete('/cart', (req, res, next) => {
		
	})

	app.delete('/cart', (req, res, next) => {
		
	})
}