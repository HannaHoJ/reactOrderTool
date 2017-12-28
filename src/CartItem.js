import React, { Component } from 'react';
import orderData from './order-data.js';
import './CartItem.css';



class CartItem extends Component {
	constructor(props){
		super(props);
		// this.getTotalItemPrice = this.getTotalItemPrice.bind(this);
	}

	// getTotalItemPrice = () =>{
	// 	const price = parseFloat(this.props.orderedProduct.price.replace(",","."));
	// 	const amount = parseFloat(this.props.orderedProduct.amount);
	// 	console.log(price);
	// 	console.log(amount);
	// 	const result = price*amount;
	// 	this.props.callback(result);
	// 	return result;
	// }

	render() {
		return (
			<div>
				<hr/>
				<span>Name: { this.props.orderedProduct.name }</span>{", "}
			{/* <span>Kategorie: { this.props.orderedProduct.category }</span>{", "} */}
				<span>Anzahl: { this.props.orderedProduct.amount }</span>{", "}
				<span>Preis: { this.props.orderedProduct.price } €</span>{", "}
				<div>Zwischensumme: { this.props.totalItemPrice } €</div>	
			</div>
		);
	}
}
export default CartItem;