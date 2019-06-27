import { handleActions } from "redux-actions";
import { signupError, clearError } from "./actions";

const errorReducer = handleActions(
  {
    [signupError]: (state, action) => ({
      signup: action.payload
    }),
    [clearError]: (state, action) => ({})
  },
  {}
);

export default errorReducer;
