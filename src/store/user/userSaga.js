import { takeLatest, all, call, put } from "redux-saga/effects";

import { LOGIN, LOGOUT, LOAD_SESSION, REGISTER } from "./index";
import {
  loginSuccess,
  loginFail,
  loadSessionSuccess,
  loadSessionFail,
  registerSuccess,
  registerFail
} from "./index";
import { login, register, currentUser, logout } from "./userAPI";
import { setupToken, resetToken } from "utils/request";

const loginSaga = function*(action) {
  const fields = action.payload;
  try {
    const data = yield call(login, fields);
    yield call(saveToken, data.token);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFail(error));
  }
};

const registerSaga = function*(action) {
  const fields = action.payload;
  try {
    const data = yield call(register, fields);
    console.log(data);
    yield call(saveToken, data.token);
    yield put(registerSuccess(data));
  } catch (error) {
    yield put(registerFail(error));
  }
};

const logoutSaga = function*(action) {
  try {
    yield call(logout);
    yield call(resetToken);
    localStorage.removeItem("token");
    // Cookies.set('token', null)
  } catch (error) {
    yield put(loginFail(error.response.data.message));
  }
};

const loadSessionSaga = function*() {
  const token = localStorage.getItem("token");
  // const token = Cookies.get('token')
  if (token) {
    yield call(saveToken, token);
    try {
      const { data } = yield call(currentUser);
      yield put(loadSessionSuccess(data));
    } catch (error) {
      yield put(loadSessionFail(error.response.data.message));
    }
  } else {
    yield put(loadSessionFail(""));
  }
};

export function saveToken(token) {
  setupToken(token);
  // Cookies.set('token', token)
  localStorage.setItem("token", token);
}

export default function*() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(REGISTER, registerSaga),
    takeLatest(LOAD_SESSION, loadSessionSaga),
    takeLatest(LOGOUT, logoutSaga)
  ]);
}
