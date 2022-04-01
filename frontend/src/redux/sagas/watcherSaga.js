import { ActionTypes } from "../constants/action-types";
import { handleDeleteIdea, handleGetIdea, handleSingleGetIdea, handleUpdateIdea } from "./rootSaga";
import { takeLatest } from "redux-saga/effects";

export function* watcherSaga() {
    yield takeLatest(ActionTypes.SET_IDEAS, handleGetIdea);
    yield takeLatest(ActionTypes.SELECTED_IDEAS, handleSingleGetIdea);
    yield takeLatest(ActionTypes.DELETE_IDEAS, handleDeleteIdea);
    yield takeLatest(ActionTypes.UPDATE_IDEAS, handleUpdateIdea);


}