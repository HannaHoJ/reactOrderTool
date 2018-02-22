import React, { Component } from 'react';
import './ProductItem.css';
import AmountSelector from '../AmountSelector/AmountSelector.js';
import Products from './../../api/Products.js';
import Orders from './../../api/Orders.js';
import ErrorBoundary from './../../ErrorBoundary.js';

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
			console.log(this.state.amount);
		}		 
	}

	addToCart = () => {
		var product = Products.getById(this.props.product.id);
		product.amount = this.state.amount;
		console.log("produdct " + product.id + " amount " + product.amount);
		return Orders.addProduct(product);
	}
	//display simple product
	render() {
		return (
			<div>
				<li>
					<div>{ this.props.product.name }</div>
					<div>{ this.props.product.description }</div>
					<div>{ this.props.product.ingredients } </div>
					<div>{ this.props.product.price/100 } €</div>
					<div>{ this.props.product.weight } { this.props.product.unit }</div>
				{/* callback from child component to have access to product amount in parent component */}
					<ErrorBoundary>
						<AmountSelector productId={ this.props.product.id } callback={this.callback} />
					</ErrorBoundary>
					{/* <div>{ this.state.amount }</div> */}
					<button type="submit" onClick={ this.addToCart } >Add to cart</button>
					<hr/>
				</li>
			</div>
		);
	}
}
export default ProductItem;