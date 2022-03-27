// it's like creating a global variable that can be passed around in a React app instead of passing props from grandparent to parent to child

import React, { createContext, useContext, useReducer} from 'react'

// This is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) =>(
     /*  USE REDUCER IS HOOK HERE */
    <StateContext.Provider value={useReducer(reducer, initialState)}>  
    {/* // HERe children refers to all child components that we wap inside at index.js               */}
        {children}
    </StateContext.Provider>
)

//THIS IS HOW WE USE IT IN COMPONENTS
export const useStateValue = ()=>useContext(StateContext); 