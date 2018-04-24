var mongoose = require('mongoose');

module.exports = () => {
	var mongodb = 'mongodb://localhost/dietz';
	mongoose.connect(mongodb);
    console.log('Verbindung zu MongoDB hergestellt');
	// Get Mongoose to use the global promise library
	mongoose.Promise = global.Promise;
	require('./../models/products-server-model.js');
	require('./../models/orders-server-model.js');
	var db = mongoose.connection;
	//Bind connection to error event (to get notification of connection errors)
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	return db;
}