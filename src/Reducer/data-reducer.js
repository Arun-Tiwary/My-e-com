export const dataReducer = (state,action) =>
{

switch (action.type) {
    
    case "ADD_TO_CART":
        if(state.itemsInCart.some((cartItem)=>cartItem.id === action.payload.id)){
            return{
                ...state,
                itemsInCart: state.itemsInCart.map((cartItem)=>cartItem.id === action.payload.id ? {...cartItem, quantiy:cartItem.quantity+1} : cartItem )


        };
    }
        else{

            return{
                ...state,
                itemsInCart: state.itemsInCart.concat({
                    ...action.payload,
                    quantity:1
                })

            }

        }

        case "REMOVE_FROM_CART":

        return{
            ...state,
            itemsInCart: state.itemsInCart.map((cartItem)=>(
                cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
            ))
        }

        case "EMPTY_CART": 
        
        return{...state,itemsInCart: []};
        

    default:
        return state;
}





















}