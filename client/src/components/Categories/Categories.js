import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import Products from './../../api/Products.js';
//import ProductList from '../ProductList/ProductList.js';
import callApi from './../../api/methods/api.js'
	


//links to specific categories
const Category = (props ) => {
	return (
		<CategoryList >	
			<li> 
				<Link to={`${props.match.url}/${props.value}`}> 
					{ props.value } 
				</Link>
			</li>
		</CategoryList>
	);	
}

//composition of components to pass children elements (category) in their
const CategoryList = (props) =>{
	return(
		<div>
			<ul>
				{ props.children }
			</ul>
		</div>
	)
}


//call function in react js
const Categories = ({match}) =>{
	
	return (
		<div>
			{
			Products.getCategories().map((item) =>{
				return (<Category key={ item } value={ item } match={ match } />)
			}) 
		}	
		{/* 
			<Route exact path={`${match.url}/:product`} component={ProductList} /> 
		 */}
		</div>
	)
}

export default Categories;