import { createContext, useContext } from "react";


export const DataContext = createContext();

const data ={
    name:"tur",
    place:"sad",
    thing:"ada"
}

export const useData = () => useContext(DataContext); 


export const DataProvider = ({children}) =>{
return(
    <DataContext.Provider value = {data}>
        {children}
    </DataContext.Provider>
)
}

