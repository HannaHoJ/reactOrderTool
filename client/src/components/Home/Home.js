import React, { Component } from 'react';
import callApi from './../../api/methods/api.js'

export class Home extends Component {
	state = {
    	response: ''
  	}

	componentDidMount(){
		callApi.getHome()
		  	.then(res => this.setState({ response: res.welcome }))
		  	.catch(e => console.log(e));
	}
	
	render() {
		return (
			<div>
				<h2>{this.state.response}</h2>
			</div>
		);
	}
}

export default Home;