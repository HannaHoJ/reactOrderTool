import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';

//we can put that in a header component with other fancy stuff
class Nav extends Component {
	render() {
		return (
			<div>
				<div>Lets Navigate around a bit!</div>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/categories'>categories</Link></li>
						<li><Link to='/cart'>cart</Link></li>
						<li><Link to='/'>Logout</Link></li>
					</ul>
				</nav>
			</div>
			
		);
	}
}

export default Nav;