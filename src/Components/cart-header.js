import { useDataContext } from "../Context/data-context"


export const CartHeader = () =>{
    const {state:{itemsInCart : item}} = useDataContext();
    return(
        <>
        {
            item.reduce((acc,item) => acc + item.quantity,0 )
        }
        </>
    )
}