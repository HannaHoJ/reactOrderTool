import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Categories.css';


const Categories = ({match}) => {
	return (
		<div> 
			<div>Choose a Category you like!</div>
			<ul>
			    <li><Link to={`${match.url}/bread`}>bread</Link></li>
			    <li><Link to={`${match.url}/milk`}>milk</Link></li>
			    <li><Link to={`${match.url}/grains`}>grains</Link></li>

  			</ul>
  			<Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
  		</div>

	)
}


export default Categories;