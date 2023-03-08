export const GET_JOBS = "GET_JOBS";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs";

export const jobsActions = () => {
  return async (dispatch) => {
    const response = await fetch(baseEndpoint, {
      method: "GET",
    });
    const data = await response.json();

    dispatch({
      type: GET_JOBS,
      payload: data,
    });
  };
};
export const searchJobsActions = (searchParams, category) => {
  return async (dispatch) => {
    const response = await fetch(baseEndpoint + "?" + category + searchParams, {
      method: "GET",
    });
    const data = await response.json();
    console.log("sono search", data);
    dispatch({
      type: FILTERED_JOBS,
      payload: data,
    });
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
