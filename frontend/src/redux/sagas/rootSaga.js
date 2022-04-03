import { ActionTypes } from "../constants/action-types";
import { call, put } from "redux-saga/effects";
import { setIdeas } from "../actions/ideaActions";
import { RequestAddIdeas, requestGetIdea, RequestIdeaDeleted, RequestSingleGetIdea, RequestUpdateIdea } from "./Services/idea";
import { handleSetIdeas } from "./Services/idea";

//get
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
        let param = action.payload;
        console.log("paramTrue", param);
        const response = yield call(RequestSingleGetIdea, param);
        console.log("respSingle", response);
        yield put({
            type: ActionTypes.SELECTED_IDEAS_SUCCESS,
            payload: response
        });
    } catch (error){
        console.log(error);
    }
}

//add
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



//delete
export function* handleDeleteIdea(action) {

    try {
        
        let pram = action.payload;
        console.log("param", pram);
        const response = yield call(RequestIdeaDeleted, pram);
        console.log("respDelete", response);
        yield put({
            type: ActionTypes.DELETE_IDEAS_SUCCESS,
            payload: pram

        });
    } catch (error){
        console.log(error);
    }

}


//update
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
