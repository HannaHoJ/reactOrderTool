import React, { Component } from 'react';
import './Cart.css';
import orderData from './order-data.js';
import CartItem from './CartItem.js';



class Cart extends Component {
	constructor(props){
		super(props)
		
		this.getTotalItemPrice = this.getTotalItemPrice.bind(this);
		this.getTotalCartPrice = this.getTotalCartPrice.bind(this);
		this.getCartItems = this.getCartItems.bind(this);
	}

	getTotalItemPrice = (order) =>{
		const price = parseFloat(order.price.replace(",","."));
		const amount = parseFloat(order.amount);
		console.log(price);
		console.log(amount);
		const result = price*amount;
		return result;
	}

	getTotalCartPrice=() =>{
		var totalCartPrice= 0;
		var cartItems = orderData.products.map((order) => {
			totalCartPrice+= this.getTotalItemPrice(order);
		});
		return (<span>{ totalCartPrice}</span>);
	}

	getCartItems=()=>{
		var cartItems = orderData.products.map((order) => {
			return <CartItem key={ order.id } orderedProduct={ order } totalItemPrice={ this.getTotalItemPrice(order) } />
		});
		return (<div>{ cartItems }</div>);
	}
	render() {
		return (
			<div>
				<div>Welcome to your cart { orderData.user.name }</div>
				<div>orderID: { orderData.id }</div>
				<div>{ this.getCartItems() }</div>
				<hr />
				<div></div>
				<div>Total: { this.getTotalCartPrice() } €</div>
				<button type="submit" >Submit Order</button>
			</div>
		);
	}
}

export default Cart;