import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Products from './Products.js';
import './Categories.css';
import App from './App.js';

const products = [
	{
		"id" : "p1",
		"name": "Roggenbrot",
		"category": "Brot",
		"ingredients": ["Roggenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "4,00",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "sehr saftiges, kerniges Brot"
	},
	{
		"id" : "p2",
		"name": "Dinkelbrot",
		"category": "Brot",
		"ingredients": ["Dinkelmehl", "Dinkelschrot", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "5,00",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "sehr bekömmliches Vollkornschrot"
	},
	{
		"id" : "p3",
		"name": "Bauernbrot",
		"category": "Brot",
		"ingredients": [ "Roggenmehl", "Weizenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "3,50",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "der Klassiker! Passt zu allem"

	},
	{
		"id" : "a1",
		"name": "Naturata Vollmilchschokolade",
		"category": "Schokolade",
		"ingredients": [ "Kakao min 30%", "Kakaobutter", "Milch", "Magermilchpulver", "Vanille"],
		"price" : "3,50",
		"weight" : "100g",
		"unit" : "piece",
		"description" : "Fairtrade, aus der Schweiz und Bio"
	}
];


function getCategoryElements(products){
	const catergories = new Set();
	const array = [];
	for(let product of products){
		const category = product.category? product.category : 'pain text';
		if(!catergories.has(category)){
			array.push(<Category key={ product.id } value={ product.category } />);
			catergories.add(category);
		} 
	}
	return array;
}

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


const CategoryList = (props) =>{

		return(
			<div>
				<ul>
					{ props.children }
				</ul>
				
			</div>
		)

}


function Categories(){
	return (
			<div>
				{ getCategoryElements(products) }
				
			</div>
		)
}


export default Categories;