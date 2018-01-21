import React, { Component } from 'react';
import './ProductList.css';
import Products from './../../api/Products.js';
import ProductItem from '../ProductItem/ProductItem.js';




class ProductList extends Component {
	constructor(props){
		super(props);

	}

	render() {
		return(
		<div>
			<div>{ this.props.match.params.product }</div>
			{
				Products.getProductsByCategory(this.props.match.params.product).map((item) => {
					return <ProductItem key={ item.id } product={ item }  />
				})
			}
		</div>
		)
	}
	
}

export default ProductList