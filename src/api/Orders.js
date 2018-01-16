///////////////add user as parameter in all functions

const Orders = {};
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Orders.collection = {};



Orders.isEmpty = () => {
	return Object.keys(Orders.collection).length === 0;
}

//get one Order by id
Orders.getById = (id) => {
	return Orders.collection[id];
}


Orders.isActive = (id) =>{
	return (Orders.collection[id].flag)? true : false;
}

Orders.isConfirmed = (id) =>{
	return (Orders.collection[id].flag === 2)? true : false;
}

Orders.isClosed = (id) =>{
	return (!Orders.collection[id].flag)? true : false;
}

Orders.findActiveOrder = () => {
	for(let order in Orders.collection){
		if(Orders.isActive(order)){
			return order;
		}
	}
}

Orders.addProduct = (product) => {
	if(Orders.isEmpty()){
		Orders.createOrder(product);
	}
	else{
		var orderId = Orders.findActiveOrder();
		console.log(orderId);
		if(!Orders.isActive(orderId)){
			console.log(Orders.isActive(orderId));
			Orders.createOrder(product);
		}
		else{
			console.log(Orders.isActive(orderId));
			Orders.collection[orderId].items.push(product);
		}

	}	
}

//no id, available
Orders.createOrder = (product) => {
	const id = uuidv4();
	var order = {};
	order.id = id;
	//Order id already exists
	if(Orders.collection[id]){

	}
	else{
		Orders.collection[id] = order;
		Orders.collection[id].items = [];
		Orders.collection[id].items.push(product);
		Orders.collection[id].created = new Date();
		Orders.collection[id].flag = 1;
		//Orders.collection[id].user = user;
	}
}

// Orders.getActiveOrders = () => {

// }
// //insert product into Order 
// Orders.addProduct = (product) => { 
// 	for(let order in Orders.collection){
// 		if(order !== id){
// 			console.log("order has to be created: " + product );
// 			return Orders.createOrder(product);
// 		}
// 		else{
// 			console.log("product is pushed to order id: " + order + " " + id);
// 			return Orders.collection[id].items.push(product);
// 		}

// 	}

// }



//update amount of product
//Orders.updateProduct

Orders.deleteProduct = (id, product) => {

}

Orders.deleteOrder = (id) => {

}

export default Orders;