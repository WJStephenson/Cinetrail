import { createContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

    const [darkMode, setDarkMode] = useState()

    useEffect(()=> {
        const theme = localStorage.getItem("darkMode")
        if(theme){
           setDarkMode(JSON.parse(theme))
        }
    }, [])

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>)

}