export const GET_ALL_PROFILE = "GET_ALL_PROFILE";
export const GET_ALL_PROFILE_ERROR = "GET_ALL_PROFILE_ERROR";
export const GET_ALL_PROFILE_LOADING = "GET_ALL_PROFILE_LOADING";

export const getAllProfileAction = (people) => {
  return {
    type: GET_ALL_PROFILE,
    payload: people,
  };
};

export const getAllProfileLoadingAction = () => {
  return {
    type: GET_ALL_PROFILE_LOADING,
  };
};

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile";

export const getAllProfileFetchAction = (key) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "GET",
        headers: { authorization: key },
      });
      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: GET_ALL_PROFILE,
          payload: data,
        });
      } else {
        alert("error fetching profiles");
        // dispatch({
        //   type: GET_PROFILE_ERROR,
        // });
      }
    } catch (error) {
      console.log("error", error);
      //   dispatch({
      //     type: GET_PROFILE_ERROR,
      //   });
    }
  };
};
