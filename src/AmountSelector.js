import React, { Component } from 'react';



class AmountSelector extends Component {
	constructor(props){
		super(props);
		this.selectMore = this.selectMore.bind(this);
		this.selectLess = this.selectLess.bind(this);
		this.state = { amount: 1 };
	}

	selectMore(e){
		if(this.state.amount >= 0){
			this.setState({
				amount: this.state.amount + 1
			});
		}
	}

	selectLess(e){
		if(this.state.amount > 0){
			this.setState({
				amount: this.state.amount - 1
			});
		}
	}

	render() {
		return (
			<div>
				<button className="amount-btn" onClick={this.selectMore}>+&nbsp;</button>
				<span>&nbsp;{ this.state.amount }&nbsp;</span>
				<button className="amount-btn" onClick={this.selectLess}>-&nbsp;</button>
			</div>
		);
	}
}

export default AmountSelector;