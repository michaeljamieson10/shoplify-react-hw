import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Routes from "./Routes"
function ProductList() {
  // const products = useSelector(st => st.products);
  const products = useSelector(st => st.products);
  const st = useSelector(st => st);
  const dispatch = useDispatch();

  function addToCart(id) {
    dispatch({ type: "ADD_TO_CART", id });
    console.log(st)
  }

  function removeFromCart(id) {
    dispatch({type: "REMOVE_FROM_CART", id });
  }


const foodList = Object.keys(products).map((id) => {
//  return products[id]
return <p><Link to={{pathname:`/products/${id}`, props:{removeFromCart, addToCart}} }>{products[id].name}</Link> <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button></p> 
  })
  console.log(foodList)

  return (
    <div className="App">
      {foodList}
  
    </div>
  );
}

export default ProductList;
