import { createContext, useState } from "react";

export const ThemeContext = createContext();


export function ThemeContextProvider({children}){
    const[theme, setTheme] = useState(true);
    function toggleTheme(){
        setTheme(!theme);
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}