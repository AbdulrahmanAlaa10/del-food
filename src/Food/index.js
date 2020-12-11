import React, { Component, Fragment } from "react";
import ProductsApi from "../api/products";
import "./Food.css";
import FoodItem from "./FoodItem";
import { connect } from "react-redux";
class Food extends Component {

  state = {
    Food: [],
  };

  componentDidMount() {
    ProductsApi.getAll()
      .then( data => {
        this.setState({
          Food: data
        })

      });

  }
    render() {
        return(
            
    <Fragment>    
        <div className="fooof">
        <h2 className="food">جميع الاكلات </h2>
        </div>

        <div class="row row-cols-1 row-cols-md-3">
          {this.state.Food.map(foood =>
                <div class="col mb-4" key={foood.id}>
                  <FoodItem foood={foood} />

                </div>

            )}
        </div>

    </Fragment>
        )
    };
}

export default Food;