import {createContext, useContext} from "react";

const OrderContext = createContext();

export function OrderProvider ({children, value}) {
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrderValue() {
    return useContext(OrderContext);
}