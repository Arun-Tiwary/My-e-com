
import { useState } from 'react';
import './App.css';
import { Cart } from './Components/cart';
import { CartHeader } from './Components/cart-header';
import { ProductListing } from './Components/product-listing';




function App() {

  
  const [route,setRoute] = useState("products")

  return (
    <div className="App">
      <h1>🅩enɘ🅩 Store</h1>

       <button type ='button' className = {route === "products" ? " button button-primary":"button button-secondary"} onClick = {() =>setRoute("products")}> Products</button>
      <button type = "button" className = {route === "cart" ? "button button-primary" : "button button-secondary" } onClick = {() =>setRoute("cart")}> Cart</button>
    <CartHeader/>
    

       {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />} 

    </div>
  );
}

export default App;
