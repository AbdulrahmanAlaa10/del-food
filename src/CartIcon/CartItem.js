import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from "../Actions/actions";
import "./CartIcon.css";

function FoodItem(props){
    const {item, index} = props;
    const {foood} = item;
            
        return (
            <div className="card">
                    <img src={foood.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        {foood.name}
                        </h5>
                        <p className="card-text">
                        Price {foood.price}$
                        <br />
                        Quantity: {item.quantity}
                        <br />
                        Total: {item.quantity * foood.price}
                        </p>
                        <button onClick={() => props.removeFromCart(index)} className="btn btn-danger">                    
                        <i className="fa fa-trash"></i> Delete
                        </button>
             </div>
            </div>
        );
    }

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}
    
export default connect(null, mapDispatchToProps)(FoodItem);