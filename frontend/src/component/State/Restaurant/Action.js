import {
  GET_ALL_RESTAURANT_FAILURE,
  GET_ALL_RESTAURANT_REQUEST,
  GET_ALL_RESTAURANT_SUCCESS,
} from "./ActionType";

export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
    try {
      const { data } = await Api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });
      console.log("all restaurant ", data);
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
    }
  };
};
