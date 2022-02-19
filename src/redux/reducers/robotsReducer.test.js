import robotsReducer from "./robotsReducer";

describe("Given robotsReducer function", () => {
  describe("When it receives robots 'Bobo' 'Bibi' and loadRobotsList action", () => {
    test("Then it should return robots 'Bobo' and 'Bibi'", () => {
      const actualRobots = [];

      const action = {
        type: "load-robots-list",
        robots: [
          {
            name: "Bobo",
          },
          {
            name: "Bibi",
          },
        ],
      };

      const expectedRobots = [
        {
          name: "Bobo",
        },
        {
          name: "Bibi",
        },
      ];

      const robotsList = robotsReducer(actualRobots, action);

      expect(robotsList).toEqual(expectedRobots);
    });
  });

  describe("When it doesn't receives robots and action", () => {
    test("Then it should retern []", () => {
      const finalRobots = robotsReducer();

      expect(finalRobots).toHaveLength(0);
    });
  });

  describe("When it receives [] and action 'kdjflkjf'", () => {
    test("Then it should return actual Robots", () => {
      const actualRobots = [
        {
          name: "Bobo",
        },
        {
          name: "Bibi",
        },
      ];

      const action = {
        type: "kdjflkjf",
        robots: [],
      };

      const expectedRobots = [
        {
          name: "Bobo",
        },
        {
          name: "Bibi",
        },
      ];

      const robotsList = robotsReducer(actualRobots, action);

      expect(robotsList).toEqual(expectedRobots);
    });
  });
});
