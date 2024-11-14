"use client";

import React, { createContext, useContext } from "react";
import { RootStore } from "@/stores/rootStore";
// import { useRouter } from "next/navigation";

let store: RootStore | null = null;
const StoreContext = createContext<RootStore | null>(store);

export const useStore = () => {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error("useStore must be used within StoreProvider");
    }

    return context;
}

const initializeStore = () => {
    const _store = store ?? new RootStore();

    if (typeof window === "undefined") {
        console.log(`initialized called at Server`);
        return _store;
    } else {
        console.log(`initialized called at Client`);
    }

    if (!store) store = _store;

    return _store;
};

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const store = initializeStore();

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;
