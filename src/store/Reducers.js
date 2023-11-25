import { combineReducers } from 'redux';

const initialState = {
    data: [],
};

const steamReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
};

export default steamReducer;

