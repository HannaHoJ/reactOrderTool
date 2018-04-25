import React, { Component } from 'react';
import './ProductList.css';
//import Products from './../../api/Products.js';
import ProductItem from '../ProductItem/ProductItem.js';
import callApi from './../../api/methods/api.js'

class ProductList extends Component {
	constructor(props){
		super(props)
		this.state={
			products: []
		}
		this.getProducts = this.getProducts.bind(this);
	}
	componentDidMount(){
		console.log(this.props.match.url);
		callApi.getContent(this.props.match.url)
		  	.then(res => {
		  		console.log(res.products);
		  		this.setState({ products: res.products });
		  		console.log(this.state.products);
		  	})
		  	.catch(e => console.error(this.props.url, e.toString()));
	}

	getProducts = (products) => {
		const productArray = products.map((item) => {
				return <ProductItem key={ item._id } product={ item } url={this.props.match.url} />
			})
		return productArray;
	}

	render() {
		const category = this.props.match.params.product;
		return (
			<div>
				<ul>
					<h2>{ category }</h2>
					{
						this.getProducts(this.state.products)
					}
				</ul>
			</div>
		);
	}
}


export default ProductList