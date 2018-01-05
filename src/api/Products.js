
//AKA GET, POST, PUT, DELETE **** server side functions

const Products = require('./products-data.json').products;
//creates v4 (random) id
const uuidv4 = require('uuid/v4');

Products.collection = {};
//Products is empty
Products.isEmpty = () => {
	return Object.keys(Products.collection).length === 0;
}

//get 
Products.insert = (product) => { 
	const id = uuidv4;
	product.id = id;
	if(Products.collection[id]){

	} else {
		Products.collection[id] = product; //assume product matches schema (todo: validate)
	}

}
//get one Product
Products.getById = (id) => {
	return Products.collection[id];
}
//get all Products
Products.getAll = () =>{
	const array = [];
	for(let product in Products.collection){
		array.push(product);
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

//delete Products
Products.delete = () => {
	for (let product in Products.collection) {
    	delete Products.collection[product];
	}
}


export default Products;