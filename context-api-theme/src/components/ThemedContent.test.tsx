import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import ThemedContent from "./ThemedContent";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("ThemedContent", () => {
  it("renders with correct background and text color for light theme", () => {
    render(
      <ThemeProvider>
        <ThemedContent />
      </ThemeProvider>
    );
    const themedSection = screen.getByText(/Themed Section/i).parentElement;
    expect(themedSection).toHaveStyle({
      backgroundColor: "#f7fafc",
      color: "#2d3748",
      borderColor: "#e2e8f0",
    });
    const themeText = screen
      .getAllByText(/Current theme/i)
      .find((el) => el.textContent?.includes("Current theme"));
    expect(themeText).toHaveTextContent("LIGHT");
  });

  it("renders with correct background and text color for dark theme", () => {
    localStorage.setItem("theme", "dark");
    render(
      <ThemeProvider>
        <ThemedContent />
      </ThemeProvider>
    );
    const themedSection = screen.getByText(/Themed Section/i).parentElement;
    expect(themedSection).toHaveStyle({
      backgroundColor: "#2d3748",
      color: "#e2e8f0",
      borderColor: "#4a5568",
    });
    const themeText = screen
      .getAllByText(/Current theme/i)
      .find((el) => el.textContent?.includes("Current theme"));
    expect(themeText).toHaveTextContent("DARK");
  });
});
