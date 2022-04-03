import { ActionTypes } from "../constants/action-types";

const initialState = {
    ideas:[],
    idea:{},
    addIdea:[]
};


export const ideaReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_IDEAS_SUCCESS:
            return { ...state, ideas: action.payload };
        case ActionTypes.DELETE_IDEAS_SUCCESS:
            return state.ideas.filter(ideas => ideas.id !== action.payload);
        case ActionTypes.UPDATE_IDEAS_SUCCESS:
            return { ...state, ideas: action.payload };
        case ActionTypes.ADD_IDEAS_SUCCESS:
                return { ...state, ideas: action.payload };
        default:
            return state;
    }
    
};

export const selectedIdeaReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECTED_IDEAS:
            return { ...state, idea: action.payload };
            case ActionTypes.SELECTED_IDEAS_SUCCESS:
                return { ...state, idea: action.payload };
        default:
            return state;
    }
};



