import {
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
} from "./ActionTypes";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const response = await Api.get(`/api/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: FIND_CART_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: FIND_CART_FAILURE, payload: error });
    }
  };
};
