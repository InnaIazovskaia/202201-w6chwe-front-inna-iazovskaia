import actionsTypes from "./actionsTypes";

export const loadRobotsListAction = (robots) => ({
  type: actionsTypes.loadRobotsList,
  robots,
});
