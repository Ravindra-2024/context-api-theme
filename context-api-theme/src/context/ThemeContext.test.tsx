import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import { useTheme } from "./useTheme";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

function TestComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe("ThemeProvider and useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = "";
  });

  it("provides default theme (light)", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(document.body.className).toBe("light-theme");
  });

  it("reads theme from localStorage", () => {
    localStorage.setItem("theme", "dark");
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.body.className).toBe("dark-theme");
  });

  it("saves theme to localStorage on change", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    await userEvent.click(screen.getByText("Toggle"));
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.body.className).toBe("dark-theme");
  });

  it("throws error if useTheme is used outside provider", () => {
    const Broken = () => {
      useTheme();
      return null;
    };
    expect(() => render(<Broken />)).toThrow();
  });
});
