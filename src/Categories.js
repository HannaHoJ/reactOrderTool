import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Products from './Products.js';
import './Categories.css';

const products = [
	{
		"id" : "p1",
		"name": "Roggenbrot",
		"category": "Brot",
		"ingredients": ["Roggenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "4,00",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "sehr saftiges, kerniges Brot"
	},
	{
		"id" : "p2",
		"name": "Dinkelbrot",
		"category": "Brot",
		"ingredients": ["Dinkelmehl", "Dinkelschrot", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "5,00",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "sehr bekömmliches Vollkornschrot"
	},
	{
		"id" : "p3",
		"name": "Bauernbrot",
		"category": "Brot",
		"ingredients": [ "Roggenmehl", "Weizenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
		"price" : "3,50",
		"weight" : "1000g",
		"unit" : "piece",
		"description" : "der Klassiker! Passt zu allem"

	},
	{
		"id" : "a1",
		"name": "Naturata Vollmilchschokolade",
		"category": "Schokolade",
		"ingredients": [ "Kakao min 30%", "Kakaobutter", "Milch", "Magermilchpulver", "Vanille"],
		"price" : "3,50",
		"weight" : "100g",
		"unit" : "piece",
		"description" : "Fairtrade, aus der Schweiz und Bio"
	}
];

//variable products ==> basically query result
//store the resutl in a data props
//store user info in user prop
//lookup: for loop over all products
//query category out of the results
/*{this.props.data.allPosts.map((post) => {
                if ((post && post.user.id === this.props.data.user.id) || this.props.data.user.isAdmin) {
                  return (<PostPreviewAdmin key={post.id} post={post}/>);
                } else {
                  return (<PostPreview key={post.id} post={post}/>);
                }
              })}
*/

function ListItem(props){
	return <li>{ props.category }</li>
}

function CategoryNames(props){
	
	const types = props.products.map((item) =>
				<ListItem key={ item.id } category={ item.category } />
		);
	return (
		<ul> { types }	</ul>
	)
}

//TODO query catergory of items and only show it once. hand products of these categorys down to products
// function Categories(props){
// 	return(
// 		<div className={'category-' + props.name} >
// 			{ props.children }
// 		</div>
// 	)
// }
const Categories = ({match}) => {
	<CategoryNames products={products} />
	return (
		<div> 
			<div>Choose a Category you like!</div>

			<CategoryNames products= { products } /> 


			<Link to={`${match.url}/Brot`}>
				<CategoryNames products= { products } />
			</Link>
		{/* JSX Comment 
			<ul>
			    <li><Link to={`${match.url}/bread`}>bread</Link></li>
			    <li><Link to={`${match.url}/milk`}>milk</Link></li>
			    <li><Link to={`${match.url}/grains`}>grains</Link></li>

  			</ul>
  			<Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
  			*/}
  		</div>

	)
}


export default Categories;