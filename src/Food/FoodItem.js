import React from "react";
import "./Food.css";
import { Link } from "react-router-dom";


export default function FoodItem(Props){
    const {foood} = Props;
    return (
  <div>
   
    <div className="card h-100">
    <div className="box">

      <img src={foood.img} className="card-img-top " alt="..." />

      <div className="card-body">
      <div className="content">

        <h5 className="card-title">{foood.name}</h5>

      </div>
        <Link to={"/Food/" + foood.id } className="btnnnn btn btn-danger">تفاصيل الاوردر</Link>
      </div>
      
    </div>



   </div>         
  </div>

    )
}