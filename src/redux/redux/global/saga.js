import { call, put, all, takeLatest } from "redux-saga/effects";
import { loginApi } from "../../../api/authenticaiton";
import { setUserDetails, setAccessToken, setLoading, setError } from "./action";
import { LOGIN, SINGUP } from "./constants";

function* loginSaga(query) {
  yield put(setLoading(true));
  try {
    const data = yield call(loginApi, query);
    yield put(setUserDetails(data));
    yield put(setAccessToken(data.token));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}
function* signupSaga(query) {
  yield put(setLoading(true));
  try {
    const data = yield call(loginApi, query);
    yield put(setUserDetails(data));
    yield put(setAccessToken(data.token));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}



export const globlaSaga = all([
  takeLatest(LOGIN, loginSaga),
  takeLatest(SINGUP, signupSaga),
  // takeLatest(CLIENT_FETCH, fetchClientData),
]);
