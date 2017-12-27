import React, { Component } from 'react';
import './Products.css';
import Product from './Product.js';

var products = [
	{
		"id" : "p1",
		"name": "Roggenbrot",
		"category": "Brot",
		"ingredients": "Roggenmehl, Wasser, Sauerteig, Hefe, Salz, Pfeffer, Kümmel",
		"price" : "4,00",
		"weight" : "1000",
		"unit" : "g",
		"description" : "sehr saftiges, kerniges Brot"
	},
	{
		"id" : "p2",
		"name": "Dinkelbrot",
		"category": "Brot",
		"ingredients": "Dinkelmehl, Dinkelschrot, Wasser, Sauerteig, Hefe, Salz, Pfeffer, Kümmel",
		"price" : "5,00",
		"weight" : "1000",
		"unit" : "g",
		"description" : "sehr bekömmliches Vollkornschrot"
	},
	{
		"id" : "p3",
		"name": "Bauernbrot",
		"category": "Brot",
		"ingredients": "Roggenmehl, Weizenmehl, Wasser, Sauerteig, Hefe, Salz, Pfeffer, Kümmel",
		"price" : "3,50",
		"weight" : "1000",
		"unit" : "g",
		"description" : "der Klassiker! Passt zu allem"

	},
	{
		"id" : "a1",
		"name": "Naturata Vollmilchschokolade",
		"category": "Schokolade",
		"ingredients": "Kakao min 30%, Kakaobutter, Milch, Magermilchpulver, Vanille",
		"price" : "3,50",
		"weight" : "100",
		"unit" : "g",
		"description" : "Fairtrade, aus der Schweiz und Bio"
	}
]

//variable products ==> basically query result
//store the resutl in a data props
//store user info in user prop
// hand that prop to the render function


class Products extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<div>{ this.props.match.params.product }</div>
				{
					products.map((item) => {
						if(this.props.match.params.product == item.category){
							return <Product key={ item.id } product={ item } />
						}
					}
				)}
				
			</div>
		);
	}
}

export default Products;