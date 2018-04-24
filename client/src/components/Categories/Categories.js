import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import callApi from './../../api/methods/api.js'
	


//links to specific categories
const Category = (props ) => {
	return (
			<li> 
				<Link to={`${props.match.url}/${props.value}`}> 
					{ props.value } 
				</Link>
			</li>

	);	
}


class Categories extends Component {
	constructor(props){
		super(props)
		this.state ={
			categories: []
		}
		this.getCategories = this.getCategories.bind(this);
	}

	componentDidMount(){
		// console.log(this.props.match.url);
		const url = "/categories" || this.props.match.url
		callApi.getContent(url)
		  	.then(res => {
		  		console.log(res.categories);
		  		this.setState({ categories: res.categories });
		  		//console.log(this.state.categories);
		  	})
		  	.catch(e => console.error(this.props.url, e.toString()));
	}

	getCategories = (categories) => {
		const array = categories.map((item) =>{
			return (<Category key={ item } value={ item } match={ this.props.match } />)
		})
		return array;
	}

	render() {
		return (
			<div>
				<ul>
					{ this.getCategories(this.state.categories) }
				</ul>
			</div>
		);
	}

}


export default Categories;