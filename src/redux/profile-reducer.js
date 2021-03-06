import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



export const ADD_PostActionCreator = () => ({ type: ADD_POST });

export const UPDATE_NEW_POST_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

let initialState = {
    posts: [
        { id: 1, post: 'post  1' },
        { id: 2, post: 'post  2' },
        { id: 3, post: 'post  3' }
    ],
    newPostText: '',
    status: " ",
    profile: null,


};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ' '
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };

        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }

        default:
            return state;

    }

}

export default profileReducer;

