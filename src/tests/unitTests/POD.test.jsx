import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import PictureOftheDay from "../../pages/pictureOftheDay/pod.page";

describe("PictureOftheDay", () => {
  it("should render loading state initially", async () => {
    render(<PictureOftheDay />);

    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.queryByText("Main component")).toBeNull();
    expect(screen.queryByText("SideBar component")).toBeNull();
    expect(screen.queryByText("Footer component")).toBeNull();

    // Ensure that loading state is rendered before data is fetched
    await screen.findByText("Loading...");
  });
});
