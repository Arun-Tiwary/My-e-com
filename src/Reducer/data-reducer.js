export const dataReducer = (state,action) =>
{

switch (action.type) {
    
    case "ADD_TO_CART":
        if(state.itemsInCart.some((cartItem)=>action.payload.id === cartItem.id)){
            
            return{
                ...state,
                itemsInCart:state.itemsInCart.map((cartItem)=>cartItem.id === action.payload.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem )


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

        case "DELETE_FROM_CART":
            if(action.payload.quantity ===1){
                return{
                    ...state,
                    itemsInCart:state.itemsInCart.filter((cartItem)=>cartItem.id !== action.payload.id)
                }
            }

            else
            {
        return{
            ...state,
            itemsInCart: state.itemsInCart.map((cartItem)=>(
                action.payload.quantity > 1 &&
                cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
            ))
        }
    }

        case "REMOVE_FROM_CART":
            return{
                ...state,
                itemsInCart: state.itemsInCart.filter((cartItem)=>cartItem.id !== action.payload.id)
            }
    
            case "EMPTY_CART": 
        
            return{...state,itemsInCart: []};
        

    default:
        return state;
}





















}