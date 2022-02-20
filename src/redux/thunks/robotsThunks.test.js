import { loadRobotsListThunk } from "./robotsThunks";

describe("Given a loadRobotsListThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadRobotsListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
