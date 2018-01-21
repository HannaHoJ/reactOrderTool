import React, { Component } from 'react';
import './ProductList.css';
import Products from './../../api/Products.js';
import ProductItem from '../ProductItem/ProductItem.js';




const ProductList = ({ match }) => {
	return(
	<div>
		<div>{ match.params.product }</div>
		{
			Products.getProductsByCategory(match.params.product).map((item) => {
				return <ProductItem key={ item.id } product={ item }  />
			})
		}
	</div>
	)
}
	


export default ProductList