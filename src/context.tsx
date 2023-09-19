import { menu, topDealUsers, chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue, userRows, products, singleUser, singleProduct } from './data';
import React, {createContext, useContext} from 'react';

export const AppContext = createContext<CurrentUserContextType | null>(null);
export const AppProvider = ({children}) => {
	return (
		<AppContext.Provider value={{menu, topDealUsers, chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue, userRows, products, singleUser, singleProduct }}>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}