import { ActionTypes } from "../constants/action-types";

export const setIdeas = (ideas) => {
    return {
        type: ActionTypes.SET_IDEAS,
        payload: ideas,
    };
};

export const selectedIdeas = (idea) => {
    return {
        type: ActionTypes.SELECTED_IDEAS,
        payload: idea,
    };
};

export const removeSelectedIdeas = () => {
    return {
        type: ActionTypes.DELETE_SELECTED_IDEAS
    };
};


// export const addIdeas = (addIdea) => {
//     return {
//         type: ActionTypes.ADD_IDEAS,
//         payload: addIdea,
//     };
// };

export const updateIdea = (ideas) => {
    return {
        type: ActionTypes.UPDATE_IDEAS,
        payload: ideas,
    };
};

export const deleteIdea = (ideas) => {
    return {
        type: ActionTypes.DELETE_IDEAS,
        payload: ideas
    };
};



