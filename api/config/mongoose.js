var mongoose = require('mongoose');

module.exports = function(){
	var db=mongoose.connect('mongodb://localhost/dietzOrder');
    console.log('Verbindung zu MongoDB hergestellt');
    //require('../app/models/user-server-model');
    require('../app/models/products-server-model');
    require('../app/models/orders-server-model');
    return db;
};
