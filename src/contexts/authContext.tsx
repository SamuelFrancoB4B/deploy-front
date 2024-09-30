"use client"
import { IUserSession } from "@/interfaces/IForms";
import { createContext, useEffect, useState } from "react";

interface IAuthProviderProps {
    children: React.ReactNode;
}

interface IAuthContextProps {
    user: IUserSession | null;
    setUser: (user: IUserSession | null) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({
    user: null,
    setUser: () => {}, logout: () => {}
});

export const AuthProvider = ({children}: IAuthProviderProps) => { 
    const [user, setUser] = useState<IUserSession | null>(null);
    //setea el cambio de usuario
    useEffect(() => {   
        if(user){
        localStorage.setItem("user", JSON.stringify({user}));
        }
     }, [user])
     //trae el usuario del LS, cargandolo al usuario
     useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
        const localUser = JSON.parse(localStorage.getItem("user")!);
        setUser(localUser?.user)
        }
     },[])  

     const logout = () => { 
        localStorage.removeItem("user");
        setUser(null);
      }

     return (
        <AuthContext.Provider value={{user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
     )
}