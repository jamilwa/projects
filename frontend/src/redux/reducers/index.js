import { combineReducers } from "redux";
import { addIdeaReducer, ideaReducer, selectedIdeaReducer } from "./ideaReducer";

const reducers = combineReducers({
    allIdeas: ideaReducer,
    idea: selectedIdeaReducer,
    addingIdeas: addIdeaReducer
});

export default reducers;