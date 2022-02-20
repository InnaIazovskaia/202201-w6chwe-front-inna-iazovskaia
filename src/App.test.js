import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain heading with text 'Robots'", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { level: 1, name: /robots/i });

      expect(title).toBeInTheDocument();
    });
  });
});
