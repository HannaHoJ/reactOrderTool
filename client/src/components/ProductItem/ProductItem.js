import React, { Component } from 'react';
//import './ProductItem.css';
import AmountSelector from '../AmountSelector/AmountSelector.js';
import Products from './../../api/Products.js';
import Orders from './../../api/Orders.js';
import ErrorBoundary from './../../ErrorBoundary.js';
import callApi from './../../api/methods/api.js'

class ProductItem extends Component {
	constructor(props){
		super(props);
		//product: PropTypes.object,
		this.state = {
			amount: 1,
			order: []
		};

		this.addToCart = this.addToCart.bind(this);
	}
	
	//shouldComponentUpdate() -> TODO: check if useful
	callback = (amountFromAmountSelector) => {
		if(amountFromAmountSelector >= this.state.amount){
			this.setState((prevState, props) => ({ 
				amount: prevState.amount + 1
			}))
			console.log(this.state.amount);
		}		 
	}

	addToCart = () => {
		const product = this.props.product;
		product.amount = this.state.amount;
		console.log("produdct " + product._id + " amount " + product.amount);
		this.setState({
			amount: 1
		})
		callApi.postItem(this.props.url, product)
		  	.then(json => {
		  		let data = this.state.order;
		  		data.push(json);
		  		this.setState({
		  			order: data
		  		});
		  	})
		  	.catch(e => console.error(this.props.url, e.toString()));
	}
	//display simple product
	render() {
		console.log(this.props.url)
		console.log(this.state.order);
		return (
			<div>
				<li>
					<div>{ this.props.product.name }</div>
					<div>{ this.props.product.description }</div>
					<div>{ this.props.product.ingredients } </div>
					<div>{ this.props.product.price/100 } €</div>
					<div>{ this.props.product.unit }: { this.props.product.weight } </div>
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