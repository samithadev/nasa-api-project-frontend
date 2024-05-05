import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Footer from "../../pages/pictureOftheDay/components/Footer";

describe("Footer", () => {
  it("should render footer component with data", () => {
    const data = {
      title: "Example Title",
      copyright: "2024",
    };

    render(<Footer data={data} />);

    const titleElement = screen.getByText(data.title);
    const copyrightElement = screen.getByText(`Copyright: ${data.copyright}`);

    expect(titleElement).toBeTruthy();
    expect(titleElement.tagName).toEqual("H2");

    expect(copyrightElement).toBeTruthy();
    expect(copyrightElement.tagName).toEqual("H1");
  });

  it("should render footer component without data", () => {
    render(<Footer />);

    const titleElement = screen.queryByText("Example Title");
    const copyrightElement = screen.queryByText("Copyright:");

    expect(titleElement).toBeNull();
  });
});
