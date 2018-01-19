import React, { Component } from 'react';
import './Cart.css';
import orderData from './order-data.js';
import CartItem from './CartItem.js';
import Orders from '../api/Orders.js';



class Cart extends Component {
	constructor(props){
		super(props)
		
		this.getTotalItemPrice = this.getTotalItemPrice.bind(this)
		this.getTotalCartPrice = this.getTotalCartPrice.bind(this)
		this.getCartItems = this.getCartItems.bind(this);
	}

	getTotalItemPrice = (order) =>{
		// const price = parseFloat(order.price.replace(",","."));
		// const amount = parseFloat(order.amount);
		return (order.price*order.amount)/100;
	}



	getTotalCartPrice=(orderItems) =>{
		var totalCartPrice= 0;
		var cartItems = orderItems.map((item) => {
			totalCartPrice+= this.getTotalItemPrice(item);
		});
		return (<span>{ totalCartPrice}</span>);
	}


	getCartItems=(orderItems)=>{
		//console.log(order.items)

		var cartItems = orderItems.map((item) => {
					return <CartItem key={ item.id } orderedProduct={ item } totalItemPrice={ this.getTotalItemPrice(item) } />
				});
		return (<div>{ cartItems }</div>);
	}
	render() {
		const order = Orders.getActiveOrder();
		return (
			//insert conditional rendering, what happens if cart is empty
			<div>
				{/* 
				<div>Welcome to your cart { this.props.activeOrder.user.name }</div>
				
				*/}
				<div>order: { order.id }</div>
				<div>{ this.getCartItems(order.items) }</div>
				<hr />
				<div></div>
				<div>Total: { this.getTotalCartPrice(order.items) } €</div>
				<button type="submit" >Submit Order</button>
			</div>
		);
	}
}

export default Cart;