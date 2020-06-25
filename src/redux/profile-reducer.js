import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const LAMP_ON = 'LAMP_ON';
const LAMP_OFF = 'LAMP_OFF';


export const ADD_PostActionCreator = () => ({ type: ADD_POST });

export const UPDATE_NEW_POST_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const lampOnAC = () => ({ type: LAMP_ON })

export const lampOffAC = () => ({ type: LAMP_OFF })

let initialState = {
    posts: [
        { id: 1, post: 'post  1' },
        { id: 2, post: 'post  2' },
        { id: 3, post: 'post  3' }
    ],
    newPostText: '',
    profile: null,
    lamp: true
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

        case LAMP_ON: {
            return { ...state, lamp: true }
        }

        case LAMP_OFF: {
            return { ...state, lamp: false }
        }
        default:
            return state;

    }

}

export default profileReducer;

