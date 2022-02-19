import { loadRobotsListAction } from "../actions/actionsCreators";

export const loadRobotsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_ROBOTSAPI);
  const robots = await response.json();
  dispatch(loadRobotsListAction(robots));
};
