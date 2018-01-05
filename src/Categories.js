import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import ProductList from './products/ProductList.js';
import './Categories.css';
import App from './App.js';
import Products from './api/Products.js';



//what categories do we have in our dataset? 
function getCategoryElements(productData){
	const catergories = new Set();
	const array = [];
	for(let product of productData.getAll()){
		console.log("id: " + product.id);
		console.log("name: " + product.name);
		const category = product.category? product.category : 'pain text';
		//We what to show them only once!
		if(!catergories.has(category)){
			array.push(<Category key={ product.id } value={ product.category } />);
			catergories.add(category);
		} 
	}
	return array;
}

//links to specific categories
const Category = (props ) => {
	return (
		<CategoryList>	
			<li> 
				<Link to={`/categories/${props.value}`}> 
					{ props.value } 
				</Link>
			</li>
			
		</CategoryList>
	);	
}

//composition of components to pass children elements (category) in their
const CategoryList = (props) =>{
	return(
		<div>
			<ul>
				{ props.children }
			</ul>
			
		</div>
	)
}

//call function in react js
function Categories(){
	return (
		<div>
			{ getCategoryElements(Products) }	
		</div>
	)
}


export default Categories;