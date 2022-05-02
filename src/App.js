
import { useState } from 'react';
import './App.css';
import { ProductListing } from './Components/product-listing';
import { Cart } from './Components/cart';
import { useCart } from './Context/cart-contxt';
import {CartHeader} from "./Components/cart-header"



function App() {

  const {test,} = useCart();
  
  const [route,setRoute] = useState("products")
  return (
    <div className="App">
      <h1>🅩enɘ🅩 Store</h1>
      <h1>Hello World 525</h1>
      
      {test}
      <button type ='button' className = {route === "products" ? " button button-primary":"button button-secondary"} onClick = {() =>setRoute("products")}> Products</button>
      <button type = "button" className = {route === "cart" ? "button button-primary" : "button button-secondary" } onClick = {() =>setRoute("cart")}> Cart</button>
      <CartHeader />

      {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />}

    </div>
  );
}

export default App;
