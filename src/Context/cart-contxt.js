import {  createContext, useContext, useState } from "react";


 export  const CartContext = createContext();

 export const useCart = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    const [itemsInCart, setItemsInCart] = useState([])

    const [toastMessage, setToastMessage] = useState("")


    const addToCart = (item) =>{
        setItemsInCart((cartItems)=>{
            if(cartItems.some((cartItem)=>cartItem.id === item.id))
            {
             setToastMessage(`${item.name} added to cart again`)
              return cartItems.map((cartItem)=>cartItem.id === item.id ? {...cartItem,quantiy:cartItem.quantiy+1} : cartItem)
            }
        else{
            setToastMessage(`${item.name} added to the cart`)
            return cartItems.concat({...item,quantiy:1})
            };

        });

    };


    const removeFromCart = (item) =>{
        for(let cartItem in itemsInCart){
            if(cartItem.id === item.id){
               if(cartItem.quantiy === 1){
                   setItemsInCart((cartItems)=>{
                      return cartItems.filter((cartValue)=>cartValue.id !== item.id)
                   })
                
               }
               else{
                   setItemsInCart(cartItems=>cartItems.map((cartItem)=>cartItem.id === item.id ? {...cartItem,   quantity:cartItem.quantity-1}: cartItem))
                   
               };
            };
        };
    };


        function emptyCart(){

            return setItemsInCart([]);
        }
    

    

    return(
        <CartContext.Provider value = {{addToCart, removeFromCart, emptyCart, itemsInCart,toastMessage}}>
            {children}
        </CartContext.Provider>
    )

}
