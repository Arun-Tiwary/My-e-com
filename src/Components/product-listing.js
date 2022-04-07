
import { useEffect, useState } from "react";
import { useCart } from "../Context/cart-contxt"
import {products, ProductCard} from "./product"
export const ProductListing = () => {

    const {addToCart, toastMessage} = useCart();
    const [showtoast, setShowToast] = useState(false);



    useEffect(()=>{
     setTimeout(()=>setShowToast(false),2000)
    },[toastMessage])


    return(
        <>
         {
            
         }
        <h1>This is Products</h1>
       { products.map((item)=>
       <div style ={{border:"1px solid black", padding:"1px" , marginBottom:"1px"}}key ={item.id}>
       <ProductCard data ={item}/>
       <button onClick = {()=>{setShowToast(true); addToCart(item)}}>Add to Cart</button>

       </div>)
       }
     <p className="toast-message"> {showtoast && toastMessage}</p>
        </>
    )
}