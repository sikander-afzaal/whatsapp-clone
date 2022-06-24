import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext(); // creating context

// the main wrapper of the app like the store in redux
export const StateProvider = ({ reducer, initialState, children }) => {
  //reducer gives us dispatch and state values
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

const useStateValue = () => useContext(StateContext); //fucntion for useContext so we dont have to always recall useContext

export default useStateValue;
