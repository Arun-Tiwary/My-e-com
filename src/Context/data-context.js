import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";
import { products } from "../Components/product";





export const DataContext = createContext();

const initialArgs ={
    products:products,
    itemsInCart:[],
    itemsInWishList:[]
}

export const useDataContext = () => useContext(DataContext); 


export const DataProvider = ({children}) =>{

    const [state,dispatch] = useReducer(dataReducer,initialArgs)
return(
<DataContext.Provider value = {{state,dispatch}}>
        {children}
    </DataContext.Provider>
)
}

