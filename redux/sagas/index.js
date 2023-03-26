import { all } from "redux-saga/effects";
import testSsrSaga from "./testSsr.saga";
export default function* rootSaga() {
  yield all([
    testSsrSaga(),
  ]);
}
