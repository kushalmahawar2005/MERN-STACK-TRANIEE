import React, { useState, useContext, createContext } from "react";

// Context creation
const KushalContext = createContext();

function ThemeP({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <KushalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </KushalContext.Provider>
  );
}

function ThemeCom() {
  const { theme, toggleTheme } = useContext(KushalContext);

  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={style}>
      <h2>UseContext Example Theme</h2>
      <p>The current theme is <b>{theme}</b></p>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}

function App() {
  return (
   <ThemeP>

    <ThemeCom />

   </ThemeP>
  );
}

export default App;
