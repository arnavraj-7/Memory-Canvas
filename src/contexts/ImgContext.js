import React from "react";



export const ImgContext=React.createContext();
export const useImg=()=>React.useContext(ImgContext);
export const ImgProvider=ImgContext.Provider;
