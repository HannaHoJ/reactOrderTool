
//AKA GET, POST, PUT, DELETE **** server side functions

const Products = {};
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Products.collection = {};
//Products is empty
Products.isEmpty = () => {
	return Object.keys(Products.collection).length === 0;
}

//tested-works
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
	const catergories = new Set();
	const array = [];
	for(let product in Products.collection){
		var item = Products.collection[product].category;	
		if(!catergories.has(item)){
			array.push(item);
			catergories.add(item);
		} 
	}
	return array;
}


//get one Product by id
Products.getById = (id) => {
	return Products.collection[id];
}
//get all Products (not a good solution in ProductList)
Products.getAll = () =>{
	const array = [];
	for(let product in Products.collection){
		var item = Products.collection[product];
		array.push(item);
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

//delete product
Products.delete = (id) => {
	delete Products.collection[id];
}

//delete all Products in collection
Products.delete = () => {
	for (let product in Products.collection) {
    	delete Products.collection[product];
	}
}


export default Products;