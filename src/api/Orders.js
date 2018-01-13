


///////////////add user as parameter in all functions

const Orders = {};
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Orders.collection = {};

//Products is empty
Orders.exists = () => {

}
//no id, available
Orders.createOrder = (product) => {
	const id = uuidv4();
	let order = {};
	order.id = id;
	//Order id already exists
	if(Orders.collection[id]){

	}
	else{
		Orders.collection[id] = order;
		Orders.collection[id].items = product;
		//Orders.collection[id].user = user;
	}
}
module.exports = {
	//insert product into Order 
	addProduct: function(product,id){ 
		for(let order in Orders.collection){
			if(order !== id){
				console.log("order has to be created: " + order );
				return Orders.createOrder(product);
			}
			else{
				console.log("product is pushed to order id: " + order + " " + id);
				return Orders.collection[id].items.push(product);
			}

		}

	}
}


//update amount of product
//Orders.updateProduct

Orders.deleteProduct = (id, product) => {

}

Orders.deleteOrder = (id) => {

}