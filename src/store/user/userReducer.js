import { handleActions, createAction, combineActions } from "redux-actions";
import Immutable from "seamless-immutable";

// ---
// CONSTANTS
// ---
export const LOGIN = "user/LOGIN";
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAIL = "user/LOGIN_FAIL";

export const REGISTER = "user/REGISTER";
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAIL = "user/REGISTER_FAIL";

export const LOAD_SESSION = "user/LOAD_SESSION";
export const LOAD_SESSION_SUCCESS = "user/LOAD_SESSION_SUCCESS";
export const LOAD_SESSION_FAIL = "user/LOAD_SESSION_FAIL";

export const LOGOUT = "user/LOGOUT";

// ---
// ACTION CREATORS
// ---
export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);

export const register = createAction(REGISTER);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFail = createAction(REGISTER_FAIL);

export const loadSession = createAction(LOAD_SESSION);
export const loadSessionSuccess = createAction(LOAD_SESSION_SUCCESS);
export const loadSessionFail = createAction(LOAD_SESSION_FAIL);

export const logout = createAction(LOGOUT);

// ---
// INITIAL STATE
// ---
export const INITIAL_STATE = Immutable({
  profile: {},
  error: "",
  isLoading: false,
  isInitializing: false,
  isAuthed: false
});

// ---
// REDUCER
// ---
export default handleActions(
  {
    [combineActions(LOGIN, REGISTER)]: (state, action) =>
      Immutable.merge(state, { isLoading: true, error: "" }),

    [combineActions(LOGIN_SUCCESS, REGISTER_SUCCESS)]: (state, action) =>
      Immutable.merge(state, {
        isLoading: false,
        error: "",
        profile: action.payload,
        isAuthed: true
      }),

    [combineActions(LOGIN_FAIL, LOAD_SESSION_FAIL, REGISTER_FAIL)]: (
      state,
      action
    ) =>
      Immutable.merge(state, {
        isLoading: false,
        isInitializing: false,
        error: action.payload
      }),

    [LOGOUT]: (state, action) =>
      Immutable.merge(state, {
        isLoading: false,
        error: "",
        profile: {},
        isAuthed: false
      }),

    [LOAD_SESSION]: (state, action) =>
      Immutable.merge(state, { isInitializing: true }),

    [LOAD_SESSION_SUCCESS]: (state, action) =>
      Immutable.merge(state, {
        isInitializing: false,
        profile: action.payload,
        isAuthed: true
      })
  },
  INITIAL_STATE
);
