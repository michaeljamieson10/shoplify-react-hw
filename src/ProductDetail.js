import React from "react";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ProductDetail() {
    const {id} = useParams();
    const { name, price,description,image_url } = useSelector(st => st.products[id])
    const dispatch = useDispatch();

    function addToCart(id) {
      dispatch({ type: "ADD_TO_CART", id });
    }
  
    function removeFromCart(id) {
      dispatch({type: "REMOVE_FROM_CART", id });
    }


  return (
    <div>
      <h3>{name}</h3>
        <p>{price}</p>
        <img src={image_url}/>
    <p>{description}</p>
    <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button>
    </div>
  );
}



export default ProductDetail;
