export const GET_JOBS = "GET_JOBS";
export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";
export const ERROR_ON = "ERROR_ON";
export const ERROR_OFF = "ERROR_OFF";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs";

export const jobsActions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ERROR_OFF });
      dispatch({ type: LOADING_ON });
      const response = await fetch(baseEndpoint, {
        method: "GET",
      });
      const data = await response.json();
      dispatch({
        type: GET_JOBS,
        payload: data.data.filter((e, i) => i < 120),
      });
    } catch (error) {
      dispatch({ type: ERROR_ON });
      dispatch({ type: LOADING_OFF });
    }
    dispatch({ type: LOADING_OFF });
  };
};
export const searchJobsActions = (searchParams, category) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ERROR_OFF });
      dispatch({ type: LOADING_ON });
      const response = await fetch(
        baseEndpoint + "?" + category + searchParams,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch({
        type: FILTERED_JOBS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ERROR_ON });
      dispatch({ type: LOADING_OFF });
    }
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
