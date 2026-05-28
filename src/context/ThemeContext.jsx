import {createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light");

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme");

        if(savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme==="dark");
        }
    }, []);

    function toggleTheme() {
        
        const newTheme = theme==="light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme==="dark");
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;