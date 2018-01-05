import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Router, Route, browserHistory} from 'react-router';
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Products from './api/Products.js';



ReactDOM.render((
	<Router>
		<App />
	</Router>	
	), document.getElementById('root'));
registerServiceWorker();

const isTestMode = true;
if(isTestMode) {
	if(Products.isEmpty){
		const products = require('./api/products-data.json').products;
		for(let product of products) {
			Products.insert(product);
		}
	}
}