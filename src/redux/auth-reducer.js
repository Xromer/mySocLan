const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });



let initialState = {
    id: null,
    email: null,
    login: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default: return state;

    }

}

export default authReducer;