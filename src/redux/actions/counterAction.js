import { actionTypes } from "../types/action-types";

export const setCounter = (value) => {
  return {
    type: actionTypes.SET_COUNTER,
    payload: value,
  };
};

// export const removeCounter = () => {
//   return {
//     type: actionTypes.REMOVE_COUNTER,
//   };
// };
