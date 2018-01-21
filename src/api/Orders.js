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

Orders.hasItem = (orderId, productId) => {
	for(let i = 0; i <= Orders.collection[orderId].items.length; i++){
		if(Orders.collection[orderId].items[i].id === productId){
			return true;
		}
		return false;
	}
}
Orders.getItemById = (orderId, productId) => {
	for(let item of Orders.collection[orderId].items){
		if(item.id === productId){
			return item;
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
		if(!Orders.hasActiveOrder()){
			return Orders.createOrder(product);
		}
		else{
			//not working TODO add amount to item if already in cart
			var orderId = Orders.findActiveOrderId();
			console.log("order exists ")
			if(Orders.collection[orderId].items.length === 0){
				console.log("items are empty")
				return Orders.collection[orderId].items.push(product);
			}
			//only works for first item in cart
			if(Orders.hasItem(orderId, product.id) === true){
				for(let i = 0; i <= Orders.collection[orderId].items.length; i++){
					if(Orders.collection[orderId].items[i].id === product.id){
						console.log("product already in cart")
						var db_amount = Orders.collection[orderId].items[i].amount;
						var product_amount = product.amount;
						var new_amount = db_amount + product_amount;
						console.log("db_amount " + db_amount + " product_amount " + product_amount + " new_amount " + new_amount)
						return Orders.collection[orderId].items[i].amount = new_amount;
					}
				}
			}
			
			if(Orders.hasItem(orderId, product.id) === false){
				console.log("product not yet in cart")
				return Orders.collection[orderId].items.push(product);

			}
			
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

Orders.deleteProduct = (id, productId) => {
	var array = Orders.collection[id].items;
	for (let i = 0; i < array.length; i++) {
		console.log(Orders.collection[id].items[i].id)
		if(Orders.collection[id].items[i].id === productId){
			Orders.collection[id].items.splice(i, 1);
		}  	
	}
}

Orders.deleteOrder = (id) => {

}

export default Orders;