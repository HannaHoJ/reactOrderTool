import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';
import AmountSelector from './AmountSelector.js';
import Products from '../api/Products.js';


class ProductItem extends Component {
	constructor(props){
		super(props);
		//product: PropTypes.object,
		this.state = {
			amount: 1
		};

		this.addToCart = this.addToCart.bind(this);
	}
	
	callback = (amountFromAmountSelector) => {
			if(amountFromAmountSelector >= this.state.amount){
				this.setState((prevState, props) => ({ 
					amount: prevState.amount + 1
				}))
			}
		 
	}

	addToCart = () => {
		console.log("addToCart");
		return Products.submit(this.props.product.id, this.state.amount);
		//creating json object with product.name, product.id, user.id, product.amount (how to access state from parent component)
		// product.pic, product.price
	}
	//display simple product
	render() {
		return (
			<div>
				<div>{ this.props.product.name }</div>
				<div>{ this.props.product.description }</div>
				<div>{ this.props.product.ingredients } </div>
				<div>{ this.props.product.price } €</div>
				<div>{ this.props.product.weight } { this.props.product.unit }</div>
			{/* callback from child component to have access to product amount in parent component */}
				<AmountSelector productId={ this.props.product.id } callback={this.callback} />
				{/* <div>{ this.state.amount }</div> */}
				<button type="submit" onClick={ this.addToCart } >Add to cart</button>
				<hr/>
			</div>
		);
	}
}
export default ProductItem;