const Products = require('./../models/products-server-model.js');
const Orders = require('./../models/orders-server-model.js');

module.exports = (app) => { 
	app.get('/', (req, res, next) =>{
		res.json({welcome: 'Willkommen im Hofladen Dietz' });
	})

	app.get('/categories', (req, res, next) =>{
		console.log('categories')
		Products.find({})
		  	.select('category')
		  	.exec(function getCategory(err, docs){
		  		const array = [];
				if(docs){
					docs.forEach(function(doc){
						var item = doc.category;
						if(!array.includes(item)){
							array.push(item);
						} 
					})
					console.log(array);
				}
				res.json({categories: array });
				if(err){
					return next(new Error('Failed to get Category'));
				}
				
		  	});
	})

	app.get('/categories/:product', (req, res, next) =>{
		const category = req.params.product
		const array = [];
		//console.log('products ' + category)
		Products.find({ "category": category})
			//.select('name')
		  	.exec(function getProducts(err, docs){
				if(docs){
					docs.forEach(function(doc){
						console.log(doc)
						array.push(doc);
						
					})
					console.log(array);
				}
				res.json({products: array });
				if(err){
					return next(new Error('Failed to get Category'));
				}
				
		  	});
	})

	// app.get('/cart', (req, res) => {
	// 	res.send({ express: 'Hello From Express' });
	// })
}