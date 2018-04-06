import React, { Component } from 'react';

export class Home extends Component {
	state = {
    	response: ''
  	}

	componentDidMount(){
		this.callApi()
		  	.then(res => this.setState({ response: res.welcome }))
		  	.catch(e => console.log(e));
	}

	callApi = async () => {
		const response = await fetch('/home');
		const body = await response.json();

		if(response.status !== 200){
			throw Error(body.message);
		}
		return body;
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