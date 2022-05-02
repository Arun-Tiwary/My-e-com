import { useCart } from "../Context/cart-contxt"
import { ProductCard } from "./product";

export const Cart = () =>{

    const {itemsInCart, addToCart, removeFromCart, emptyCart} = useCart();

    const cartTotal = itemsInCart.reduce((acc, item)=> acc+(item.price * item.quantity),0);
    

   
    return(
        <>
        <h1>This is Fooking Cart</h1>
        {
            itemsInCart.map((item)=>
            <div key = {item.id}>
                <ProductCard data = {item} />
                <p>quantity: {item.quantity}</p>
                <button className="button button-light" onClick = {()=>addToCart(item)}>+</button>
                <button className="button button-light" onClick={()=>removeFromCart(item)}>-</button>
                </div>
            )
        }

        {
            itemsInCart.length>0 && (<><h3>Cart Total : {cartTotal}</h3>
            <button className="button button-dark" onClick={()=>emptyCart()}>Clear Cart</button>
            </>
            )
          
        }
        </>
    )
}