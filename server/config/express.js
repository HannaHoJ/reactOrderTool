const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

module.exports = () => {
	//eigene Middleware zur Ausgabe der Anfrage auf der Konsole
    const logger=function(req, res, next) {
        console.log(req.method, req.url);
        next();
    }

	var app = express();
	app.use(logger);

		//Middleware
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

	//Middleware for Products
	const productMiddleware = require('./../routes/product-routes.js');
	productMiddleware(app);

	//Middleware for Orders
	// const orderMiddleware = require('./server/routes/order-routes.js');
	// orderMiddleware(app);

	app.use((req, res, next)=>{
	    res.sendStatus(404);
	});

	app.use(errorHandler);

}