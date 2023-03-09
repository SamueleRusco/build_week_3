export const GET_JOBS = "GET_JOBS";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs";

export const jobsActions = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_ON });
    const response = await fetch(baseEndpoint, {
      method: "GET",
    });
    const data = await response.json();

    dispatch({
      type: GET_JOBS,
      payload: data,
    });
    dispatch({ type: LOADING_OFF });
  };
};
export const searchJobsActions = (searchParams, category) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_ON });
    const response = await fetch(baseEndpoint + "?" + category + searchParams, {
      method: "GET",
    });
    const data = await response.json();
    console.log("sono search", data);
    dispatch({
      type: FILTERED_JOBS,
      payload: data,
    });
    dispatch({ type: LOADING_OFF });
  };
};
export const addJob = (favouriteJob) => {
  return {
    type: ADD_JOBS,
    payload: favouriteJob,
  };
};
export const removeJob = (favouriteJob) => {
  return {
    type: REMOVE_JOBS,
    payload: favouriteJob,
  };
};
export const loadingJob = () => {
  return {
    type: REMOVE_JOBS,
  };
};
