import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem.js';
import Orders from './../../api/Orders.js';
import callApi from './../../api/methods/api.js'


class Cart extends Component {
	constructor(props){
		super(props)
		
		this.getTotalItemPrice = this.getTotalItemPrice.bind(this)
		this.getTotalCartPrice = this.getTotalCartPrice.bind(this)
		this.getCartItems = this.getCartItems.bind(this);
		//this.getCartState = this.getCartState.bind(this);
		this.state = {
			hasActiveOrder: Orders.hasActiveOrder(),
			updateOrder: false,
			orders: []
		}
	}

	componentWillMount(){
		callApi.getContent(this.props.match.url)
			.then(res => {
				this.setState({ orders: res.orders })
				console.log(this.state.orders)
			})
			.catch(e => console.error(this.props.url, e.toString()));
	}

	getTotalItemPrice = (order) =>{
		// const price = parseFloat(order.price.replace(",","."));
		// const amount = parseFloat(order.amount);
		return (order.price*order.amount)/100;
	}


	callback = (updateOrder) => {
		this.setState({
			updateOrder: updateOrder,
		})
	}

	getTotalCartPrice = (orderItems) =>{
		var totalCartPrice = 0;
		orderItems.map((item) => {
			return totalCartPrice+= this.getTotalItemPrice(item);
		});
		return (<span>{ totalCartPrice}</span>);
	}

	getCartItems=(orderItems)=>{
		//console.log(order.items)
		var cartItems = orderItems.map((item) => {
			return <CartItem 
				key={ item.id } 
				id={ item.id } 
				name={ item.name } 
				amount={ item.amount } 
				price={ item.price } 
				totalItemPrice={ this.getTotalItemPrice(item) }
				callback = { this.callback } />

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
				<ul>
				{/* 
				<div>Welcome to your cart { this.props.activeOrder.user.name }</div>
				
				*/}
					<div>order: { order.id }</div>
					<div>{ this.getCartItems(order.items) }</div>
					<hr />
					<div></div>
					<div>Total: { this.getTotalCartPrice(order.items) } €</div>
					<button type="submit" >Submit Order</button>
				</ul>
			</div>
			);
		}else{
			return (<h3>Cart is empty!</h3>)
		}
		
	}
}

export default Cart;