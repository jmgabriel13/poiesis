import { createContext, useContext, useEffect, useState } from "react";
import { strapiFetch } from "../api/strapiClient";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGlobal = async () => {
            try {
                const json = await strapiFetch("/api/global");
                setGlobalData(json.data);
            } catch (err) {
                console.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGlobal();
    }, []);

    return (
        <GlobalContext.Provider value={{ globalData, loading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);