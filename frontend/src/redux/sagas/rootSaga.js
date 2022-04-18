import { ActionTypes } from "../constants/action-types";
import { call, put } from "redux-saga/effects";
import { RequestAddIdeas, RequestGetAllIdea, requestGetIdea, RequestIdeaDeleted, RequestSingleGetIdea, RequestUpdateIdea } from "./Services/idea";

export function* handleGetAllIdea() {
    try {
        const response = yield call(RequestGetAllIdea);
        yield put({
            type: ActionTypes.GET_ALL_IDEAS_SUCCESS,
            payload: response
            

        });
    } catch (error){
        console.log(error);
    }

}


export function* handleGetIdea() {
    try {
        const response = yield call(requestGetIdea);
        yield put({
            type: ActionTypes.GET_IDEAS_SUCCESS,
            payload: response

        });
    } catch (error){
        console.log(error);
    }

}

export function* handleSingleGetIdea(action) {
    try {
        let params = action.payload;
        console.log("paramTrue", params);
        const response = yield call(RequestSingleGetIdea, params);
        console.log("respSingle", response);
        yield put({
            type: ActionTypes.SELECTED_IDEAS_SUCCESS,
            payload: response
        });
    } catch (error){
        console.log(error);
    }
}

export function* handleAddIdea(action) {
    try {
        let params = action.payload
        const response = yield call(RequestAddIdeas, params);
        console.log("resp4", response);
        yield put ({
            type: ActionTypes.ADD_IDEAS_SUCCESS,
            payload: response
        });
    } catch (error){
        console.log(error);
    }
}


export function* handleDeleteIdea(action) {

    try {
        
        let params = action.payload;
        console.log("param", params);
        const response = yield call(RequestIdeaDeleted, params);
        console.log("respDelete", response);
        yield put({
            type: ActionTypes.DELETE_IDEAS_SUCCESS,
            payload: params

        });
    } catch (error){
        console.log(error);
    }

}


export function* handleUpdateIdea(action) {
    try {
        let idParam = action.payload.id
        let params = action.payload
        const response = yield call(RequestUpdateIdea, idParam, params);
        console.log("resp3", response);
        yield put ({
            type: ActionTypes.UPDATE_IDEAS_SUCCESS,
            payload: response
        });
    } catch (error){
        console.log(error);
    }
}
