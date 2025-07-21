import React from "react";
import { useTheme } from "../context/useTheme"; // Import the custom hook

/**
 * A component that displays content with styling based on the current theme.
 * It consumes the theme value from ThemeContext.
 */
const ThemedContent: React.FC = () => {
  // Use the custom hook to get the current theme
  const { theme } = useTheme();

  return (
    <div
      className="p-6 rounded-lg shadow-md transition-colors duration-200"
      style={{
        backgroundColor: theme === "dark" ? "#2d3748" : "#f7fafc", // Tailwind gray-800 / gray-50
        color: theme === "dark" ? "#e2e8f0" : "#2d3748", // Tailwind gray-200 / gray-800
        border: "1px solid",
        borderColor: theme === "dark" ? "#4a5568" : "#e2e8f0", // Tailwind gray-700 / gray-200
      }}
    >
      <h3 className="text-2xl font-bold mb-4">Themed Section</h3>
      <p className="text-base leading-relaxed">
        This content dynamically changes its appearance based on the current
        theme. The theme is managed globally by the Context API, making it
        accessible to any component nested within the ThemeProvider.
      </p>
      <p className="mt-2 text-sm">
        Current theme:{" "}
        <span className="font-semibold">{theme.toUpperCase()}</span>
      </p>
    </div>
  );
};

export default ThemedContent;
