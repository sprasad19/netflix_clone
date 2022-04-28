import { all } from "redux-saga/effects";
import { globlaSaga } from "./redux/global/saga";
// import clients from "./redux/clients/saga";
export default function* rootSaga() {
  return yield all([
    globlaSaga,
    // clients,
    // sagas2,
    // sagas3
  ]);
}
