import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(function() {

        const token = localStorage.getItem("token");

        if(token) {
            setUser(token);
        }
        setLoading(false);

    }, []);

    function login(token) {
        localStorage.setItem("token", token);
        setUser(token);
    }

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;