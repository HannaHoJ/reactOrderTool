var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

//https://stackoverflow.com/questions/18859284/mongoose-custom-schema-types
var Order = require('./Orders-server-model');


var userSchema = new Schema({
   	id: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    adress: String,
    orders: [{
        type: Schema.Types.ObjectId, 
        ref: 'Order' 
    }]
});

//converting schema to model for constructing documents
module.exports=mongoose.model('User', userSchema);