import { menu, topDealUsers } from './data';
import React, {createContext, useContext} from 'react';

export const AppContext = createContext<CurrentUserContextType | null>(null);
export const AppProvider = ({children}) => {
	return (
		<AppContext.Provider value={{menu, topDealUsers}}>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}