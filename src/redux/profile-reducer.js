const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const ADD_PostActionCreator = () => ({ type: ADD_POST });

export const UPDATE_NEW_POST_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState = {
    posts: [
        { id: 1, post: 'post  1' },
        { id: 2, post: 'post  2' },
        { id: 3, post: 'post  3' }
    ],
    newPostText: ''
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
        default:
            return state;

    }

}

export default profileReducer;

