import { ActionTypes } from "../constants/action-types";
import { handleAddIdea, handleDeleteIdea, handleGetIdea, handleSingleGetIdea, handleUpdateIdea } from "./rootSaga";
import { takeLatest } from "redux-saga/effects";

export function* watcherSaga() {
    yield takeLatest(ActionTypes.GET_IDEAS, handleGetIdea);
    yield takeLatest(ActionTypes.SELECTED_IDEAS, handleSingleGetIdea);
    yield takeLatest(ActionTypes.DELETE_IDEAS, handleDeleteIdea);
    yield takeLatest(ActionTypes.UPDATE_IDEAS, handleUpdateIdea);
    yield takeLatest(ActionTypes.ADD_IDEAS, handleAddIdea);


}