import { takeLatest } from "redux-saga/effects";
import { handleGetIdea } from "./handlers/idea";
import { ActionTypes } from "../constants/action-types";

export function* watcherSaga() {
    yield takeLatest(ActionTypes.SET_IDEAS, handleGetIdea);
}