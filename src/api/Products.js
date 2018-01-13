
//AKA GET, POST, PUT, DELETE **** server side functions

var Orders = require('./Orders.js');

const Products = {};
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Products.collection = {};
//Products is empty
Products.isEmpty = () => {
	return Object.keys(Products.collection).length === 0;
}


//insert products in collection
Products.insert = (product) => { 
	const id = uuidv4();
	product.id = id;
	if(Products.collection[id]){

	} else {
		Products.collection[id] = product; //assume product matches schema (todo: validate)
	}

}


Products.getCategories = () =>{
	const array = [];
	for(let product in Products.collection){
		var item = Products.collection[product].category;	
		if(!array.includes(item)){
			array.push(item);
		} 
	}
	return array;
}


//get one Product by id
Products.getById = (id) => {
	return Products.collection[id];
}
//get all Products 
Products.getAll = () =>{
	const array = [];
	for(let product in Products.collection){
		var item = Products.collection[product];
		array.push(product);
	}
	return array;
}

Products.getProductsByCategory = (category) =>{
	const array = [];
	for(let product in Products.collection){
		if(Products.collection[product].category == category){
			array.push(Products.collection[product])
		}
	}
	return array;
}

//update product
Products.update = (id, parameter) => {

}
//update products
// Products.update = () => {
	
// }

//submit product to cart
Products.submit = (id, amount) => {
	var product = Products.collection[id];
	product.amount = amount;
	console.log("product submitted: " + product.amount);
	return Orders.addProduct(product);
}

//delete product
Products.delete = (id) => {
	if(id === null || id === undefined || id === false){
		console.log("[ERORR] id is not defined in delete()")
	}
	else{
		delete Products.collection[id];
	}
	
}

//delete all Products in collection
Products.deleteAll = () => {
	for (let product in Products.collection) {
    	delete Products.collection[product];
	}
}


export default Products;