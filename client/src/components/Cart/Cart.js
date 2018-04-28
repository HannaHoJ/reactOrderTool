import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem.js';
//import Orders from './../../api/Orders.js';
import callApi from './../../api/methods/api.js'


class Cart extends Component {
	constructor(props){
		super(props)
		
		this.getTotalItemPrice = this.getTotalItemPrice.bind(this)
		this.getTotalCartPrice = this.getTotalCartPrice.bind(this)
		this.getCartItems = this.getCartItems.bind(this);
		//this.getCartState = this.getCartState.bind(this);
		this.state = {
			hasActiveOrder: false,
			updateCart: false,
			order: {}
		}
	}

	componentDidMount(){
		callApi.getContent(this.props.match.url)
			.then(res => {
				this.setState({ order: res.orders })
				const order = this.state.order;
				if(Object.keys(order).length !== 0){
					this.setState({ hasActiveOrder: true })
				}
				console.log(this.state.order)
				console.log(this.state.hasActiveOrder)
			})
			.catch(e => console.error(this.props.url, e.toString()));
	}

	getTotalItemPrice = (order) =>{
		// const price = parseFloat(order.price.replace(",","."));
		// const amount = parseFloat(order.amount);
		return (order.price*order.amount)/100;
	}


	callback = (updateCart) => {
		this.setState({
			updateCart: updateCart,
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
				key={ item._id } 
				orderId={ this.state.order._id }
				item={ item }
				totalItemPrice={ this.getTotalItemPrice(item) }
				url={this.props.match.url}
				callback = { this.callback } />

		});
		return <div>{ cartItems }</div>;
	}
	//convert order array to object
	render() {
		if(this.state.hasActiveOrder){
			console.log(this.state.order._id);
			return (
			//insert conditional rendering, what happens if cart is empty
			<div>
				<ul>
				{/* 
				<div>Welcome to your cart { this.props.activeOrder.user.name }</div>
				
				*/}
					<div>order: { this.state.order._id }</div>
					<div>{ this.getCartItems(this.state.order.items) }</div>
					<hr />
					<div></div>
					<div>Total: { this.getTotalCartPrice(this.state.order.items) } €</div>
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