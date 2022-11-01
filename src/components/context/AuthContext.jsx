import {useState, useMemo, createContext, useCallback } from "react";
import PropType from 'prop-types';
import { useContext } from "react";


const MY_AUTH_APP = "MY_AUTH_APP_1"
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(MY_AUTH_APP))


    const login = useCallback(function () {
        localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true);
      }, []);

      const logout = useCallback(function () {
        localStorage.removeItem(MY_AUTH_APP, true);
        setIsAuthenticated(false);
      }, []);

    const value = useMemo (()=>({
        login,
        logout,
        isAuthenticated
    }),[login, logout, isAuthenticated])


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.PropType={
     children: PropType.object
}

export function useAuthContext(){
    return useContext(AuthContext);
}