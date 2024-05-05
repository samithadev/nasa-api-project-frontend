import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../../pages/pictureOftheDay/components/Main";

describe("Main", () => {
  it("should render main component with image", () => {
    const data = {
      hdurl: "https://example.com/image.jpg",
    };

    render(
      <Router>
        <Main data={data} />
      </Router>
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeTruthy();
    expect(imageElement.getAttribute("src")).toEqual(data.hdurl);
  });

  it("should render main component without image when data is not provided", () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeTruthy();
    expect(imageElement.getAttribute("src")).toBeNull();
  });
});
