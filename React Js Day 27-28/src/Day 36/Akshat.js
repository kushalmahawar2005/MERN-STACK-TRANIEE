import React, {useState, useEffect, createContext, Children, useContext} from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const ToggleTheme = () => {
        setTheme((previous) => (previous === 'light' ? 'dark' : 'light'));
    };
    return (
        
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
         
        
    );
}

    function ThemeComponent() {
        const {theme , ToggleTheme} = useContext(ThemeContext);

        const themeStyle = {
            padding : '20px',
            backgroundColor : 'dark' ? '#333' : '#fff',
            color : theme === 'dark' ? '#fff' : '#000',
            borderRadius : '5px',
            textAlign : 'center'
            fontSize: '10px'
        };

        return (
            <div style={themeStyle}>
                <h2> ThemeComponent</h2>
                <p>The current theme is <strong>{theme}</strong></p>
                <button onClick={ToggleTheme}>
                    Toggle to {theme === 'light' ? 'dark' : 'Light'} Theme
                </button>
            </div>
        );

    }


        export default function Jay() {
            return (
                <ThemeProvider>
                    <div style={{ padding : '20px'}}>
                    <h1>useContext Theme Toggle Example</h1>
                    <ThemeComponent/>
                    </div>
                </ThemeProvider>
            );
        }