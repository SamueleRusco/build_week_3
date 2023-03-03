export const PUT_PROFILE_IMG = "PUT_PROFILE_IMG";
export const PUT_PROFILE_IMG_ERROR = "PUT_PROFILE_IMG_ERROR";
export const PUT_PROFILE_IMG_LOADING = "PUT_PROFILE_IMG_LOADING";
export const PUT_EXPERIENCE_IMG = "PUT_EXPERIENCE_IMG";
export const PUT_POST_IMG = "PUT_POST_IMG";

export const putProfileImg = (fd, profileID, key) => {
  /* let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
   */ return async (dispatch) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        profileID +
        "/picture",
      {
        method: "POST",
        body: fd,
        headers: { authorization: key },
      }
    );
    await response.json();
    dispatch({
      type: PUT_PROFILE_IMG,
      payload: fd,
    });
  };
};
export const putExperienceImg = (fd, experienceID, profileID, key) => {
  /* let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  */ return async (dispatch) => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences/` +
        experienceID +
        "/picture",
      {
        method: "POST",
        body: fd,
        headers: { authorization: key },
      }
    );
    await response.json();
    dispatch({
      type: PUT_EXPERIENCE_IMG,
      payload: fd,
    });
  };
};
export const putPostImg = (fd, experienceID, key) => {
  /* let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  */ return async (dispatch) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + experienceID,
      {
        method: "POST",
        body: fd,
        headers: { authorization: key },
      }
    );
    await response.json();
    dispatch({
      type: PUT_POST_IMG,
      payload: fd,
    });
  };
};
