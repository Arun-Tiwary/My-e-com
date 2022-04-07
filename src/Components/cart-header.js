import { useCart } from "../Context/cart-contxt";

export const CartHeader = () =>{
    const {itemsInCart : item} = useCart();
    return(
        <>
        {
            item.reduce((acc,item) => acc + item.quantity,0 )
        }
        </>
    )
}