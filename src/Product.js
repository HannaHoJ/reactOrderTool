import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import AmountSelector from './AmountSelector.js';


class Product extends Component {
	static propTypes={
		product: PropTypes.object,
	}


	render() {
		return (
			<div>
				<div>{ this.props.product.name }</div>
				<div>{ this.props.product.description }</div>
				<div>{ this.props.product.ingredients } </div>
				<div>{ this.props.product.price } €</div>
				<div>{ this.props.product.weight } { this.props.product.unit }</div>
				<AmountSelector productId={ this.props.product.id } />
				<hr/>
			</div>
		);
	}
}
export default Product;