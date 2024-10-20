import React, { createContext } from "react";
import rootStore from "./rootStore";

const RootContext = createContext(rootStore);

const StoreProvider = ({ children } : { children: React.ReactNode }) => (
    <RootContext.Provider value={rootStore}>
        {children}
    </RootContext.Provider>
)

export default StoreProvider;
