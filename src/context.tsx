import { menu, topDealUsers, chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from './data';
import React, {createContext, useContext} from 'react';

export const AppContext = createContext<CurrentUserContextType | null>(null);
export const AppProvider = ({children}) => {
	return (
		<AppContext.Provider value={{menu, topDealUsers, chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion }}>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}