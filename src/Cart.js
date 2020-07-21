import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
    // const { name, price,description,image_url } = useSelector(st => st.products[id])
    const { products, cartItems } = useSelector(st => st)
    const dispatch = useDispatch();

    function addToCart(id) {
      dispatch({ type: "ADD_TO_CART", id });
    }
  
    function removeFromCart(id) {
      dispatch({type: "REMOVE_FROM_CART", id });
    }
    const cartList = Object.keys(cartItems).map((id) => {
        return <p>Quantity: {cartItems[id]}  <Link to={{pathname:`/products/${id}`, props:{removeFromCart, addToCart}} }>{products[id].name}</Link> 
        <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button></p> 
    } )
    const foodList = Object.keys(products).map((id) => {
        //  return products[id]
        return <p>Quantity: {cartItems[id]}<Link to={{pathname:`/products/${id}`, props:{removeFromCart, addToCart}} }>{products[id].name}</Link> <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button></p> 
          })
console.log(cartItems)
console.log(cartItems['47314fa1-ae56-4eae-80be-af6691145951'])
  return (
    <div>
        {/* {foodList} */}
        {cartList}
      {/* <h3>{name}</h3> */}
        {/* <p>{price}</p> */}
        {/* <img src={image_url}/> */}
    {/* <p>{description}</p> */}
    {/* <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button> */}
    </div>
  );
}



export default Cart;
