import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Categories from './Categories';
import Nav from './Nav';
import Products from './Products';
import Home from './Home';
import Confirmation from './Confirmation';

const NotFound = () => (
  <h3>404.. This page is not found!</h3>
)

class App extends Component {  


  render() {
    return (
      <div className="App">
        {/* NavComponent */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </div>
      
    );
  }
}

export default App;
