import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives robot with 'Proton' as name", () => {
    test("Then it should display title with text 'Proton'", () => {
      const robot = {
        id: 1,
        name: "Proton",
        image: "",
        speed: 1,
        strength: 2,
        date_of_creation: "2022",
      };

      render(<Robot robot={robot} />);

      const title = screen.queryByRole("heading", { name: "Proton" });

      expect(title).toBeInTheDocument();
    });

    test("Then it should display img with alt 'Proton'", () => {
      const robot = {
        id: 1,
        name: "Proton",
        image: "",
        speed: 1,
        strength: 2,
        date_of_creation: "2022",
      };

      render(<Robot robot={robot} />);

      const alt = screen.queryByAltText("Proton");

      expect(alt).toBeInTheDocument();
    });
  });

  describe("When it receives robot with speed '1', strength '2' date_of_creation '2022'", () => {
    test("Then it should display text 'Speed: 1' 'Strength: 2' 'Date of creation: 2022", () => {
      const robot = {
        id: 1,
        name: "Proton",
        image: "",
        speed: 1,
        strength: 2,
        date_of_creation: "2022",
      };

      render(<Robot robot={robot}></Robot>);

      const expectedSpeedText = "Speed: 1";
      const expectedStrengthText = "Strength: 2";
      const expectedDateText = "Date of creation: 2022";

      const speedText = screen.getByText(expectedSpeedText);
      const strengthText = screen.getByText(expectedStrengthText);
      const dataText = screen.getByText(expectedDateText);

      expect(speedText).toBeInTheDocument();
      expect(strengthText).toBeInTheDocument();
      expect(dataText).toBeInTheDocument();
    });
  });
});
