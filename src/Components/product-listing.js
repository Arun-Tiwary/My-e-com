import { useDataContext } from "../Context/data-context";
import { ProductCard } from "./product";


export const ProductListing = () =>{

   const{state,dispatch} = useDataContext(); 

   return(
       <>
       <h2>Top Products</h2>
     {
         state.products.map((item)=>(
             <div className="myCard" key = {item.id}>
                 <ProductCard data = {item} />
                  <button  type = "button" className = "button button-primary" onClick = {()=>{dispatch({type: "ADD_TO_CART",payload: item})}}>Add to cart</button>
                  
                 </div>
         ))
     }
       </>
   )


}