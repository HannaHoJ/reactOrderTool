import React, { Component } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem.js';
import Products from '../api/Products.js';

 

//variable products ==> basically query result
//store the resutl in a data props
//store user info in user prop
// hand that prop to the render function


class ProductList extends Component {
	constructor(props){
		super(props)
		
	}

	
	//displays only products of certain category
	render() {
		return (
			<div>
				<div>{ this.props.match.params.product }</div>
				{
					Products.map((item) => {
						if(this.props.match.params.product === item.category){
							return <ProductItem key={ item.id } product={ item }  />
						}
					}
				)}
				
			</div>
		);
	}
}

export default ProductList;