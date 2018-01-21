///////////////add user as parameter in all functions

const Orders = {};
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Orders.collection = {};

Orders.insert = (order) => { 
	const id = uuidv4();
	order.id = id;
	if(Orders.collection[id]){

	} else {
		Orders.collection[id] = order; //assume product matches schema (todo: validate)
	}

}

Orders.isEmpty = () => {
	return Object.keys(Orders.collection).length === 0;
}

//get one Order by id
Orders.getById = (id) => {
	return Orders.collection[id];
}

Orders.getItems =(id) => {
	return Orders.collection[id].items;
}

Orders.isActive = (id) =>{
	console.log(Orders.collection[id].status)
	return (Orders.collection[id].status === "active")? true : false;
}

Orders.isConfirmed = (id) =>{
	return (Orders.collection[id].status === "confirmed")? true : false;
}

Orders.isClosed = (id) =>{
	return (Orders.collection[id].status === "closed")? true : false;
}

Orders.findActiveOrderId = () => {
	for(let order in Orders.collection){
		if(Orders.isActive(order)){
			return order;
		}
	}
}


Orders.hasActiveOrder = () => {
	for(let order in Orders.collection){
		if(Orders.isActive(order)){
			return true;
		}
		else{
			return false;
		}
	}
}
Orders.existsActiveOrder = () => {
	for(let order in Orders.collection){
		return Orders.isActive(order);
	}
}

Orders.getActiveOrder = () => {
	for(let order in Orders.collection){
		if(Orders.isActive(order)){
			return Orders.collection[order];
		}
	}
}

//one can add products with same key. should not be allowed, instead add the product amount to the existing key
Orders.addProduct = (product) => {
	if(Orders.isEmpty()){
		return Orders.createOrder(product);
	}
	else{
		var orderId = Orders.findActiveOrderId();
		console.log(orderId);
		if(!Orders.isActive(orderId)){
			console.log(Orders.isActive(orderId) + "no active order");
			return Orders.createOrder(product);
		}
		else{
			console.log(Orders.isActive(orderId));
			return Orders.collection[orderId].items.push(product);
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
		Orders.collection[id].status = "active";
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