import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import the custom hook

/**
 * A component that provides a button to toggle the application theme.
 * It consumes the toggleTheme function from ThemeContext.
 */
const ThemeToggler: React.FC = () => {
  // Use the custom hook to get the theme and toggleTheme function
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
      style={{
        backgroundColor: theme === "dark" ? "#4a5568" : "#cbd5e0", // Tailwind gray-700 / gray-300
        color: theme === "dark" ? "#e2e8f0" : "#2d3748", // Tailwind gray-200 / gray-800
        border: "1px solid",
        borderColor: theme === "dark" ? "#2d3748" : "#a0aec0", // Tailwind gray-800 / gray-400
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggler;
