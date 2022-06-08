
import { useDataContext } from "../Context/data-context";
import { ProductCard } from "./product";

export const Cart = () =>{

    const {state:{itemsInCart},dispatch} = useDataContext();

    const cartTotal = itemsInCart.reduce((acc, item)=> acc+(item.price * item.quantity),0);
    

   
    return(
        <>
        <h1>This is Fooking Cart</h1>
        {
            itemsInCart.length>0 && (<><h3>Cart Total : {cartTotal}</h3>
            <button className="button button-dark" onClick={()=>dispatch({type: "EMPTY_CART",})}>Clear Cart</button>
            </>
            )
          
        }
        {
            itemsInCart.map((item)=>
            <div key = {item.id}>
                <ProductCard data = {item} />
                <p>quantity: {item.quantity}</p>
                <button className="button button-light" onClick = {()=>dispatch({type: "ADD_TO_CART",payload: item})}>+</button>
                <button className="button button-light" onClick={()=>dispatch({type: "REMOVE_FROM_CART", payload:item})}>-</button>
                </div>
            )
        }

        
        </>
    )
}