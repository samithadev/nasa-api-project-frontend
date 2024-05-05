import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import SideBar from "../../pages/pictureOftheDay/components/SideBar";

describe("SideBar", () => {
  it("should render sidebar component with data", () => {
    const data = {
      title: "Example Title",
      date: "2024-05-05",
      explanation: "Example explanation text.",
    };

    render(<SideBar data={data} />);

    const titleElement = screen.getByText(data.title);
    const dateElement = screen.getByText(data.date);
    const explanationElement = screen.getByText(data.explanation);

    expect(titleElement).toBeTruthy();
    expect(dateElement).toBeTruthy();
    expect(explanationElement).toBeTruthy();
  });
});
