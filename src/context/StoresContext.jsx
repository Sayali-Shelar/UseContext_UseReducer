import { createContext, useReducer } from "react";

export const StoresContext = createContext();
const initialState={
    cart : [] 
}
function reducer(state,action){
    switch(action.type){
        case "addtocart":
            return{
                cart : [...state.cart]
            }
    }
}


export const StoresProvider =(({children})=>{

    const [state ,dispatch]= useReducer(reducer,  initialState)
    return(
        <StoresContext.Provider value={{state,dispatch}}>
            {children}
        </StoresContext.Provider>
    )
})