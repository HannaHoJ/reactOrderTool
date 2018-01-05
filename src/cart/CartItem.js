import React, { Component } from 'react';
import orderData from './order-data.js';
import './CartItem.css';



class CartItem extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<hr/>
				<span>Name: { this.props.orderedProduct.name }</span>{", "}
			{/* <span>Kategorie: { this.props.orderedProduct.category }</span>{", "} */}
				<span>Anzahl: { this.props.orderedProduct.amount }</span>{", "}
				<span>Preis: { this.props.orderedProduct.price/100 } €</span>{", "}
				<div>Zwischensumme: { this.props.totalItemPrice } €</div>	
			</div>
		);
	}
}
export default CartItem;