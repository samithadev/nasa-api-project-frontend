import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Register from "../../pages/register/components/Register";
import { BrowserRouter as Router } from "react-router-dom";

describe("Register", () => {
  it("should render register page with form", () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    expect(screen.getByRole("form")).toBeTruthy();
    expect(screen.getByLabelText("Name")).toBeTruthy();
    expect(screen.getByLabelText("Email Address")).toBeTruthy();
    expect(screen.getByLabelText("Password")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Register" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Login" })).toBeTruthy();
  });
});
