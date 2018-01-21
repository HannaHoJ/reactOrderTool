import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem.js';
import Orders from './../../api/Orders.js';



class Cart extends Component {
	constructor(props){
		super(props)
		
		this.getTotalItemPrice = this.getTotalItemPrice.bind(this)
		this.getTotalCartPrice = this.getTotalCartPrice.bind(this)
		this.getCartItems = this.getCartItems.bind(this);
		//this.getCartState = this.getCartState.bind(this);
		this.state = {
			hasActiveOrder: Orders.hasActiveOrder(),
		}
	}


	// getCartState = (active) => {
	// 	this.setState({
	// 		hasActiveOrder: active
	// 	})
	// }

	getTotalItemPrice = (order) =>{
		// const price = parseFloat(order.price.replace(",","."));
		// const amount = parseFloat(order.amount);
		return (order.price*order.amount)/100;
	}



	getTotalCartPrice = (orderItems) =>{
		var totalCartPrice = orderItems.reduce((acc, curr) => {
			return (this.getTotalItemPrice(acc) + this.getTotalItemPrice(curr.price));
		});
		return <span>{ totalCartPrice}</span>;
	}

	getCartItems=(orderItems)=>{
		//console.log(order.items)

		var cartItems = orderItems.map((item) => {
					return <CartItem key={ item.id } name={ item.name } amount={ item.amount } price={ item.price } totalItemPrice={ this.getTotalItemPrice(item) } />
				});
		return <div>{ cartItems }</div>;
	}

	render() {
		if(this.state.hasActiveOrder){
			const order = Orders.getActiveOrder();
			console.log(order);
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
		}else{
			return (<div>Cart is empty!</div>)
		}
		
	}
}

export default Cart;