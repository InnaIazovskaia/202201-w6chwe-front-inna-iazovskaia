import actionsTypes from "../actions/actionsTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionsTypes.loadRobotsList:
      newRobots = [...action.robots];
      break;
    default:
      newRobots = [...robots];
  }

  return newRobots;
};

export default robotsReducer;
