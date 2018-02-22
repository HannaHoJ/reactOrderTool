import React from 'react';
import './ProductList.css';
import Products from './../../api/Products.js';
import ProductItem from '../ProductItem/ProductItem.js';




const ProductList = ({ match }) => {
	return(
	<div>
		<ul>
			<h2>{ match.params.product }</h2>
			{
				Products.getProductsByCategory(match.params.product).map((item) => {
					return <ProductItem key={ item.id } product={ item }  />
				})
			}
		</ul>
	</div>
	)
}
	


export default ProductList