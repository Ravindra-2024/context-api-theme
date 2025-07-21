import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import { describe, it, expect } from "vitest";

describe("ThemeToggler", () => {
  it("renders and toggles theme", async () => {
    render(
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent?.toLowerCase()).toMatch(/switch to dark theme/);
    await userEvent.click(button);
    expect(button.textContent?.toLowerCase()).toMatch(/switch to light theme/);
  });
});
