import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Categories.css';
import Products from './../../api/Products.js';
import ProductItem from '../ProductItem/ProductItem.js';

//links to specific categories
const Category = (props ) => {
	return (
		<CategoryList >	
			<li> 
				<Link to={`/categories/${props.value}`}> 
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
		</div>
	)
}






export default Categories;