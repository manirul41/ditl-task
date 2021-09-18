import { actionTypes } from "../types/action-types";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COUNTER:
      return { ...state, value: payload };
    // case actionTypes.REMOVE_COUNTER:
    //   return {};
    default:
      return state;
  }
};
