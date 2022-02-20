import robotsReducer from "./robotsReducer";

describe("Given robotsReducer function", () => {
  describe("When it receives robots 'Bibi' 'Bobo' and loadRobotsList action", () => {
    test("Then it should return robots 'Bibi' and 'Bobo'", () => {
      const actualRobotsList = [];

      const action = {
        type: "load-robots-list",
        robots: [
          {
            id: 1,
            name: "Bibi",
            image: "",
            speed: 1,
            strength: 2,
            "date of creation": "2022-02-18",
          },
          {
            id: 2,
            name: "Bobo",
            image: "",
            speed: 6,
            strength: 2,
            "date of creation": "2022-02-18",
          },
        ],
      };

      const expectedRobotsList = [
        {
          id: 1,
          name: "Bibi",
          image: "",
          speed: 1,
          strength: 2,
          "date of creation": "2022-02-18",
        },
        {
          id: 2,
          name: "Bobo",
          image: "",
          speed: 6,
          strength: 2,
          "date of creation": "2022-02-18",
        },
      ];

      const robotsList = robotsReducer(actualRobotsList, action);

      expect(robotsList).toEqual(expectedRobotsList);
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
      const actualRobotsList = [
        {
          id: 1,
          name: "Bibi",
          image: "",
          speed: 1,
          strength: 2,
          "date of creation": "2022-02-18",
        },
        {
          id: 2,
          name: "Bobo",
          image: "",
          speed: 6,
          strength: 2,
          "date of creation": "2022-02-18",
        },
      ];

      const action = {
        type: "kdjflkjf",
        robots: [],
      };

      const expectedRobotsList = [
        {
          id: 1,
          name: "Bibi",
          image: "",
          speed: 1,
          strength: 2,
          "date of creation": "2022-02-18",
        },
        {
          id: 2,
          name: "Bobo",
          image: "",
          speed: 6,
          strength: 2,
          "date of creation": "2022-02-18",
        },
      ];

      const robotsList = robotsReducer(actualRobotsList, action);

      expect(robotsList).toEqual(expectedRobotsList);
    });
  });
});
