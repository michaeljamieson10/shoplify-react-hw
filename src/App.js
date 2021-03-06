import React from "react";
import NewShoppingListForm from "./NewShoppingListForm";
// import Meme from "./Meme";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ProductDisplay from "./ProductDisplay"
import { Link } from "react-router-dom";
import Routes from "./Routes"
import Navbar from "./Navbar"
function App() {
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

return <p><Link to={`/products/${id}`}>{products[id].name}</Link> <button onClick={()=>addToCart(id)}>Add to cart</button> <button onClick={()=>removeFromCart(id)}>Remove from cart</button></p> 
  })

// console.log(products.values,' wow we are in the app')
  return (
    <>
    <Navbar />
    <div className="App">

      <Routes />
    </div>
    </>
  );
}

export default App;
