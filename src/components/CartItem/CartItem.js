import React, { Component } from 'react';
import './CartItem.css';



class CartItem extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<hr/>
				<span>Name: { this.props.name }</span>{", "}
			{/* <span>Kategorie: { this.props.orderedItem.category }</span>{", "} */}
				<span>Anzahl: { this.props.amount }</span>{", "}
				<span>Preis: { this.props.price/100 } €</span>{", "}
				<div>Zwischensumme: { this.props.totalItemPrice } €</div>	
			</div>
		);
	}
}
export default CartItem;