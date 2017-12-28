import React, { Component } from 'react';
import './Products.css';
import Product from './Product.js';
import productData from './product-data.js';

 

//variable products ==> basically query result
//store the resutl in a data props
//store user info in user prop
// hand that prop to the render function


class Products extends Component {
	constructor(props){
		super(props)
		
	}

	
	//displays only products of certain category
	render() {
		return (
			<div>
				<div>{ this.props.match.params.product }</div>
				{
					productData.map((item) => {
						if(this.props.match.params.product === item.category){
							return <Product key={ item.id } product={ item }  />
						}
					}
				)}
				
			</div>
		);
	}
}

export default Products;