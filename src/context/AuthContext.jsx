import { useState, createContext, useEffect } from "react";
import { getDecodeToken, getRole, getToken, removeToken } from "../services/AuthService";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const savedToken = getToken()
        if (savedToken) {
            const decoded = getDecodeToken();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsLoggedIn(true)
            setRole(getRole())
            setUser(decoded.sub)
            }
        
    }, [])
    
    const logout = () => {
        removeToken()
        localStorage.removeItem('role')
        setIsLoggedIn(false)
        setRole(null)
        setUser(null)
    }
    
    return(
        <AuthContext.Provider value = { { user, role, isLoggedIn, logout } }>
    { children }
            </AuthContext.Provider>
    )


}
