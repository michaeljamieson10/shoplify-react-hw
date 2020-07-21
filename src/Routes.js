import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <ProductList />
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetail />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
