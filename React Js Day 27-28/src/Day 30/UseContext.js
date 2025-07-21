import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the context
const ThemeContext = createContext();

// Step 2: Create the provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Create a component that uses the context
function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyle = {
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#000' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyle}>
      <h2>Theme Component</h2>
      <p>The current theme is <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

// Step 4: Root component that wraps everything in ThemeProvider
export default function UseContext() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>useContext Theme Toggle Example</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}
