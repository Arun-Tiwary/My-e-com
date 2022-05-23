
import { useState } from 'react';
import './App.css';
import { ProductListing } from './Components/product-listing';
import { Cart } from './Components/cart';
import { useCart } from './Context/cart-contxt';
import {CartHeader} from "./Components/cart-header"
import { useData } from './Context/data-context';


function App() {

  const {name,place} = useData();
  const [route,setRoute] = useState("products")

  return (
    <div className="App">
      <p>ok</p>
      <h1>🅩enɘ🅩 Store</h1>
      <h1>Hello World 525</h1>

      <p>{name}</p>
      {place}
    
  
      
      <button type ='button' className = {route === "products" ? " button button-primary":"button button-secondary"} onClick = {() =>setRoute("products")}> Products</button>
      <button type = "button" className = {route === "cart" ? "button button-primary" : "button button-secondary" } onClick = {() =>setRoute("cart")}> Cart</button>
      {/* <CartHeader /> */}

      {/* {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />} */}

    </div>
  );
}

export default App;
