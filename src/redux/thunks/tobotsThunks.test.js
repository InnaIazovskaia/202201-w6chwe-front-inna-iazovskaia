import robotsReducer from "../reducers/robotsReducer";

describe("Given robotsReducer function", () => {
  describe("When it receives robots 'Bobo' 'Bibi' and loadRobotsList action", () => {
    test("Then it should return robots 'Bobo' and 'Bibi'", () => {
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

  describe("When it receives [] and action 'lalala'", () => {
    test("Then it should retern actualRobots", () => {
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
        type: "lalala",
        robots: [],
      };

      const robotsList = robotsReducer(actualRobotsList, action);

      expect(robotsList).toEqual(actualRobotsList);
    });
  });

  describe("When it does't receives robots and action", () => {
    test("Then it should return []", () => {
      const result = robotsReducer();

      expect(result).toHaveLength(0);
    });
  });
});
