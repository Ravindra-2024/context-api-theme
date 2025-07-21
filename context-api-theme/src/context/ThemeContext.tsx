import React, { createContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

// 1. Define the shape of the context value
// This interface describes what consumers will receive from the context.
interface ThemeContextType {
  theme: "light" | "dark"; // The current theme
  toggleTheme: () => void; // A function to switch the theme
}

// 2. Create the Context object
// We provide a default value that matches ThemeContextType.
// This default value is used if a component tries to consume the context
// without a Provider above it in the tree.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export { ThemeContext };

// 3. Create a custom hook for consuming the context
// This hook makes it easier and safer to use the context,
// ensuring it's always used within a ThemeProvider.
// (Moved useTheme to useTheme.ts)

// 4. Create the ThemeProvider component
// This component will manage the actual theme state and provide it to its children.
interface ThemeProviderProps {
  children: ReactNode; // ReactNode is the type for children prop
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Use useState to manage the theme state
  // We can initialize it from localStorage for persistence
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : "light";
    }
    return "light";
  });

  // Effect to save theme to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      // Apply theme to body for global styling
      document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    }
  }, [theme]);

  // Callback function to toggle the theme
  // useCallback is used to memoize this function, preventing unnecessary re-renders
  // of components that depend on it, if it's passed down as a prop.
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // The value object that will be provided to consumers
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    // The Provider component makes the contextValue available to all its children
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
