import React, { Component } from 'react';
import './CartItem.css';
//import Orders from './../../api/Orders.js';
import callApi from './../../api/methods/api.js'

class CartItem extends Component {
	constructor(props){
		super(props);

		this.deleteItem = this.deleteItem.bind(this);
		this.state={
			order: {},
			updateCart: false
		}

	}



	deleteItem = () => {
		const url = this.props.url;
		const orderId = this.props.orderId;
		const itemId = this.props.item._id;
		callApi.deleteItem(url, orderId, itemId)
	  	.then((res) => {
	  		console.log(res.order);
	  		this.setState({
	  			updateCart: true,
				order: res.order
			})
			this.props.callback(this.state.updateCart);
	  	})
	  	.catch(e => console.error(this.props.url, e.toString()));

	}

	render() {
		return (
			<div>
				<li>
					<hr/>
					<span>Name: { this.props.item.name }</span>{", "}
				{/* <span>Kategorie: { this.props.orderedItem.category }</span>{", "} */}
					<span>Anzahl: { this.props.item.amount }</span>{", "}
					<span>Preis: { this.props.item.price/100 } €</span>{", "}
					<div>Zwischensumme: { this.props.totalItemPrice } €</div>
					<button type="submit" onClick={ this.deleteItem }>&times;</button>	
				</li>
			</div>
		);
	}
}
export default CartItem;