import React from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider
import ThemeToggler from "./components/ThemeToggler"; // Import the toggler
import ThemedContent from "./components/ThemedContent"; // Import the themed content

// Basic CSS for body to apply themes globally (you'd put this in index.css or similar)
// Note: Tailwind classes are used for component styling, but these are for body.
const GlobalStyles = () => (
  <style>
    {`
    body {
      margin: 0;
      padding: 0;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter', sans-serif;
    }
    .light-theme {
      background-color: #f0f4f8; /* Light blue-gray */
      color: #2d3748; /* Dark text */
    }
    .dark-theme {
      background-color: #1a202c; /* Dark blue-gray */
      color: #e2e8f0; /* Light text */
    }
    `}
  </style>
);

const App: React.FC = () => {
  return (
    // Wrap your entire application (or the part that needs theme access)
    // with the ThemeProvider.
    <ThemeProvider>
      <GlobalStyles /> {/* Apply global styles */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          React TypeScript Theme App
        </h1>
        <ThemeToggler /> {/* This component can toggle the theme */}
        <ThemedContent />{" "}
        {/* This component displays theme-dependent content */}
      </div>
    </ThemeProvider>
  );
};

export default App;
