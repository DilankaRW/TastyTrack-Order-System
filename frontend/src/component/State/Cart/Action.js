import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  GET_ALL_CART_ITEMS_FAILURE,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
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

export const getAllCartItems = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
    try {
      const response = await Api.get(`/api/carts/${reqData.cartId}/items`, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
    }
  };
};

export const addItemToCart = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const { data } = await Api.put(`/api/cart/add`, reqData.cartItem, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      console.log("add item to cart ", data);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
  };
};
