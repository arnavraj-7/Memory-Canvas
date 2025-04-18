import React from 'react';
import { createContext, useContext } from 'react';
export const ActiveUserContext = createContext();
export const useActiveUser = () => useContext(ActiveUserContext);
export const ActiveUserProvider = ActiveUserContext.Provider;