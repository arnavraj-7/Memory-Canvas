import React from "react";
import {useContext} from "react";

export const dataContext=React.createContext();
export const useData=()=>useContext(dataContext);
export const DataProvider=dataContext.Provider;