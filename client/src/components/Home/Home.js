import React, { Component } from 'react';
import callApi from './../../api/methods/api.js'

export class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
    		response: ''
  		}
	}
	

	componentDidMount(){
		console.log(this.props.match);
		// callApi.getContent(this.props.match.url)
		//   	.then(res => this.setState({ response: res.welcome }))
		//   	.catch(e => console.error(this.props.url, e.toString()));
		const apiUri = "http://localhost:3001/"
		callApi.getContent(apiUri)
		  	.then(res => this.setState({ response: res.welcome }))
		  	.catch(e => console.error(this.props.url, e.toString()));
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