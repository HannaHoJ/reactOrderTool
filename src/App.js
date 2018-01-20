import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router  } from 'react-router-dom';
import Cart from './components/Cart/Cart.js';
import Categories from './components/Categories/Categories.js';
import Products from './api/Products.js';
import Orders from './api/Orders.js';
//import Nav from './Nav';
//import Confirmation from './Confirmation';

const NotFound = () => (
  <h3>404.. This page is not found!</h3>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const isTestMode = true;
if(isTestMode) {
  if(Products.isEmpty()){
    const products = require('./api/products-data.json').products;
    for(let product of products) {
      Products.insert(product);
      console.log("product: " + product.id + ", name: " + product.name);
    }
  }
  if(Orders.isEmpty){
    const orders = require('./api/order-data.json').orders;
    for(let order of orders) {
      Orders.insert(order);
      console.log("order: " + order.id + ", name: " + order.name);
    }
  }
  console.log(Orders.collection);
  console.log(Products.getAll());
  console.log(Products.getCategories());  
}

//Main routing 
class App extends Component {  


  render() {
    return (
      <div className="App">
        {/* NavComponent
        <Nav />
         */}
        
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/categories'>categories</Link></li>
                <li><Link to='/cart'>cart</Link></li>
                <li><Link to='/'>Logout</Link></li>
              </ul>
              
            </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/categories" component={Categories} />              
             {/* JSX Comment */} 
            {/* cart has to be /:user/cart */}
              <Route path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
            </div>
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
