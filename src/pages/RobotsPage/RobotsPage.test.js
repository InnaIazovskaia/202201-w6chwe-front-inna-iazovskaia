import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import RobotsPage from "./RobotsPage";

describe("Given a RobotsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display heading 'Robots'", () => {
      renderWithProviders(<RobotsPage />);

      const heading = screen.getByRole("heading", {
        name: /robots/i,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives robots", () => {
    test("Then it should display list of robots", () => {
      renderWithProviders(<RobotsPage />);

      const expectedRobotsList = screen.getByRole("list", {
        name: /robots/i,
      });

      expect(expectedRobotsList).toBeInTheDocument();
    });
  });
});
