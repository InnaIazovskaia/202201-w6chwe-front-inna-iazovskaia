import { loadRobotsListAction } from "./actionsCreators";

describe("Given a losdRobotsListAction", () => {
  describe("When it receives robots 'Bibi' and 'Bobo'", () => {
    test("Then it should retern load-robots-action with robots 'Bibi' and 'Bobo'", () => {
      const robotsList = [
        {
          name: "Bibi",
        },
        {
          name: "Bobo",
        },
      ];
      const expectedAction = {
        type: "load-robots-list",
        robots: robotsList,
      };

      const action = loadRobotsListAction(robotsList);

      expect(action).toEqual(expectedAction);
    });
  });
});
