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

export const getAllProfileFetchAction = () => {
  let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "GET",
        headers: { authorization: key },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("tutti i profili", data);
        dispatch({
          type: GET_ALL_PROFILE,
          payload: data,
        });
      } else {
        alert("error fetching profiles");
        console.log("error");
        // dispatch({
        //   type: GET_PROFILE_ERROR,
        // });
      }
    } catch (error) {
      console.log(error);
      //   dispatch({
      //     type: GET_PROFILE_ERROR,
      //   });
    }
  };
};
