//rules to read and write to db for order documents

var Order = require('mongoose').model('Order');
//creates v4 (random) id
var uuidv4 = require('uuid/v4');

module.exports.getAll=function(req, res, next) {

	Order.find({}).exec(function(err, oders) {
		if(err){
			res.status(204).json(null);
		}
		else{
			res.status(200).json(orders);
		}	
	
	});
}

module.exports.getById=function(req, res, next) {
    Order.findOne({id: req.order.id}, function(err, order) {
        if (err) 
        	return next(new Error('Failed to fetch the order '  + req.order.id));
        res.json(oder);
    });
};


module.exports.createOrder = function(req, res, next){
	var order = new Order(req.body);
	var id = uuidv4();
	order.id = id;
	order.user = req.user.name;
	order.statusType = "active";
	order.save(function(err){
		if(err)
			return next(new Error('Failed to insert order'));
	})
	res.location('/order/' + order.id).json(null);
}


// module.exports.addProduct = function(req, res, next){
// 	var product = new Product(req.body);
// 	var id = uuidv4();
// 	product.id = id;
// 	product.save(function(err){
// 		if(err)
// 			return next(new Error('Failed to add product to order'));
// 	})
// 	res.location('/order/' + order.id).json(null);
// }