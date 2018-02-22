import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Nav.css';


//we can put that in a header component with other fancy stuff
class Nav extends Component {
	render() {
		return (
			<div>
				<div>Lets Navigate around a bit!</div>
				<Router>
					<nav>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/categories'>categories</Link></li>
							<li><Link to='/cart'>cart</Link></li>
							<li><Link to='/'>Logout</Link></li>
						</ul>
						
					</nav>
				</Router>
			</div>
			
		);
	}
}

export default Nav;