import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Store/Store";
import './App.css';
// page
import Home from "./Home/index";
import Search from "./Search";
import OnlineProduct from "./OnlineProduct/index";
import Cart from "./Cart/index";
import Food from "./Food/index";
import CartIcon from "./CartIcon/CatrIcon"; 

class App extends Component {
 
  render() {
    return (
      <Router>

<div className="container">
<div className="navnvbar">
  <div className="navbar">

  <Link to="/" className="bar">Delivery^_^</Link>

      <div className="links">
      <Link to="/Search" className="barr">Search</Link>
        <Link to="/Food" className="barr">Food</Link>
        <Link to="/Cart" className="barr">Cart</Link>

      </div>
      <CartIcon />

    </div>
  </div>
</div>


<Route path="/" component={Home} exact />
<Route path="/Food" component={Food} exact />
<Route path="/Food/:id" component={OnlineProduct} exact />
<Route path="/Cart" component={Cart} exact />
<Route path="/Search" component={Search} exact />

</Router>

    );
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;