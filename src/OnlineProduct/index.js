import React, { Component } from "react";
import { getById } from "../api/products";
import {addToCart} from "../Actions/actions";
import {connect} from "react-redux";

class OnlineProduct extends Component{


    state ={
        loading: true,
        quantity : 1,
        foood: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id)) 
           .then(foood => {
               this.setState({
                   foood,
                   loading: false
               });
           })

    }

    handleQuantity = (event) => {
        const value = event.target.value;
        if(value < 1)
        return ;

        this.setState({
            quantity: value
        })
    }
    addToCart = (foood) => {
        this.props.addToCart(foood, this.state.quantity);
    }


    render(){
        if(this.state.loading)
        return 'Loading ^..^';
        const foood = this.state.foood;
        const quantity =this.state.quantity;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={foood.img} width={'100%'} />
                    </div>
                    <div className="col-6">
                    <h1>{foood.name}</h1>
                    <p className="card-text">{foood.description}</p>
                    <p> السعر {foood.price} جنيه</p>
                        
                       
                    <input type="number" value={quantity} onChange={this.handleQuantity} />
                    <p>السعر الاجمالي: {quantity * foood.price }</p>
                    <button className="btn btn-info" onClick={() => this.addToCart(foood)}>
                        أضف إلي سلة الشراء

                    </button>
                    </div>
                
                </div>
                </div>
     
    
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(OnlineProduct);