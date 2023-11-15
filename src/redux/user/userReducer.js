import userActionTypes from "./userActionTypes";

const INITIAL_STATE = {
    user: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                error: null
            };
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;