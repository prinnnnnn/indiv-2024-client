"use client";

import React, { createContext, useContext, useEffect } from "react";
import { RootStore } from "@/stores/rootStore";
import { cookies } from "next/headers";
// import { useRouter } from "next/navigation";

let store: RootStore | null = null;
const StoreContext = createContext<RootStore | null>(store);

function getCookie(name: string) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null; 
}

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

    useEffect(() => {

        // console.log(`side effect triggered at StoreProvider to load persisted state`);

        if (getCookie("token")) {
            // console.log(`Loading persisted state from localStorage`);
            store.loadFromLocalStorage();
        }

    }, []);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;
