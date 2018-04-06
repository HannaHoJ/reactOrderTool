const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var db=mongoose.connect('mongodb://localhost:27017/dietz');
    console.log('Verbindung zu MongoDB hergestellt');

require('./client/app/models/products-server-model');
require('./client/app/models/orders-server-model');

//build the app
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const errorHandler = (err, req, res, next) => {
	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render(err);
}

app.get('/home', (req, res, next) =>{
	res.json({ welcome: 'Willkommen im Hofladen Dietz' });
})

// app.get('/categories', (req, res) =>{

// })

// app.get('/categories/:product', (req, res) =>{
// 	res.end("You can order " + req.params.product + ".");
// })

// app.get('/cart', (req, res) => {
// 	res.send({ express: 'Hello From Express' });
// })

app.use((req, res)=>{
    res.sendStatus(404);
});


app.use(errorHandler);

//start server
app.listen(port, () => console.log(`Listening on port ${port}`));
