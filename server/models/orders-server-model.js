var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//https://stackoverflow.com/questions/18859284/mongoose-custom-schema-types
//var Product = require('./products-server-model');


// var itemSchema = new Schema({
	
	
// });

var orderSchema = new Schema({
   	id: String,
    statusType: String,
    // user:{
    //	type: String,
    // 	ref: 'User',
    // }
    //insert funktion so it is totalPrice/100
    totalPrice: Number,
    date: {
        type: Date,
        default: Date.now
        },
    items: [{
        id: String,
        name: String,
        price: Number,
        //thumbnail: String,
        weight: String,
        unit: String,
        amount: Number
    }],
});

//module.exports=mongoose.model('Item', itemSchema);
module.exports=mongoose.model('Orders', orderSchema);
