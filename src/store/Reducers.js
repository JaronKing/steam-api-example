import {
   SET_STEAM,
} from '../store/Actions';

const initialState = {
    data: [],
    retrieveUsernameState: "init",
    retrieveProfileState: "init",
    retrieveLibraryState: "init",
    calculateCountState: "init",
    gameCountOver100: 0,
};

const steamReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STEAM:
            let returnValue = { ...state };
            returnValue[action.payload.index] = action.payload.value;
            return returnValue;
        default:
            return {
                ...state,
            }
    }
};

export default steamReducer;

