import { call, put } from "redux-saga/effects";
import { setIdeas } from "../../actions/ideaActions";
import { requestGetIdea } from "../requests/idea";

export function* handleGetIdea(action) {
    try {
        const response = yield call(requestGetIdea);
        const { data } = response;
        yield put(setIdeas(data));
    } catch (error){
        console.log(error);
    }

}