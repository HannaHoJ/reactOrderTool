import React, { Component } from 'react';
import './CartItem.css';
import Orders from './../../api/Orders.js';


class CartItem extends Component {
	constructor(props){
		super(props);

		this.deleteItem = this.deleteItem.bind(this);
		this.state={
			orderUpdate: false
		}

	}

	deleteItem = () => {
		const order = Orders.getActiveOrder();
		this.setState({
			orderUpdate: true
		})
		this.props.callback(this.state.orderUpdate);
		return Orders.deleteProduct(order.id, this.props.id);
	}

	render() {
		return (
			<div>
				<li>
					<hr/>
					<span>Name: { this.props.name }</span>{", "}
				{/* <span>Kategorie: { this.props.orderedItem.category }</span>{", "} */}
					<span>Anzahl: { this.props.amount }</span>{", "}
					<span>Preis: { this.props.price/100 } €</span>{", "}
					<div>Zwischensumme: { this.props.totalItemPrice } €</div>
					<button type="submit" onClick={ this.deleteItem }>x</button>	
				</li>
			</div>
		);
	}
}
export default CartItem;