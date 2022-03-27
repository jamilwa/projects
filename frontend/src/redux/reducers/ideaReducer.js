import { ActionTypes } from "../constants/action-types";

const initialState = {
    ideas:[],
};

const newInitialState = {
    addIdea:[],
}

export const ideaReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_IDEAS:
            return { ...state, ideas: payload };
        default:
            return state;
    }
    
};

export const selectedIdeaReducer = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_IDEAS:
            return { ...state, ...payload };
        case ActionTypes.DELETE_SELECTED_IDEAS:
            return {};
        case ActionTypes.DELETE_IDEAS:
            return {};
        case ActionTypes.UPDATE_IDEAS:
            return {...state, ...payload};
        default:
            return state;
    }
};


export const addIdeaReducer = (state = newInitialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_IDEAS:
            return { ...state, addIdea: payload };
        default:
            return state;
    }
};

