var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var productSchema=new Schema({
    id: String,
    name: String,
    //thumbnail: String,
    category: String,
    ingredients: String,
    //insert funktion so it is price/100
    price: Number,
    weight: String,
    unit: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Product', productSchema);


