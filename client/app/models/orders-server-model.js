var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//https://stackoverflow.com/questions/18859284/mongoose-custom-schema-types
//var Product = require('./products-server-model');


var itemSchema = new Schema({
	id: String,
	name: String,
	price: Number,
	weight: String,
	unit: String,
	amount: Number
});


var orderSchema = new Schema({
   	id: String,
    statusType: String,

    //thumbnail: String,
    // category: String,
    // ingredients: String,
    // price: Number,
    // weight: String,
    // unit: String,
    // description: String,
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
    items: [itemSchema],
});
module.exports=mongoose.model('Item', itemSchema);
module.exports=mongoose.model('Order', orderSchema);
