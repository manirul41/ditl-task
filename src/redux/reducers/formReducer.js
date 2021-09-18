import { actionTypes } from "../types/action-types";

const initialState = {
  user: [],
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: [...state.user, payload] };
    default:
      return state;
  }
};
