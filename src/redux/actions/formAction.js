import { actionTypes } from "../types/action-types";

export const setUser = (value) => {
  return {
    type: actionTypes.SET_USER,
    payload: value,
  };
};
