const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const Products = require('mongoose').model('Product', ProductSchema);

var mongodb = 'mongodb://localhost/dietz';
mongoose.connect(mongodb);
    console.log('Verbindung zu MongoDB hergestellt');
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const Products = require('./api/app/models/products-server-model.js');
const Orders = require('./api/app/models/orders-server-model.js');

//build the app
const app = express();

const port = process.env.PORT || 3001;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});


const errorHandler = (err, req, res, next) => {
	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render(err);
}

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
				console.log(fail)
				//if (err) return next(new Error('Failed to get Category'));
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
				console.log(fail)
				//if (err) return next(new Error('Failed to get Category'));
			}
			
	  	});
})

// app.get('/cart', (req, res) => {
// 	res.send({ express: 'Hello From Express' });
// })

app.use((req, res)=>{
    res.sendStatus(404);
});


app.use(errorHandler);

//start server
app.listen(port, () => console.log(`Listening on port ${port}`));
