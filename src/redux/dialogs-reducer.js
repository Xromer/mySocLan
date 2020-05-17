const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const ADD_MESSAGEActionCreator = () => ({ type: ADD_MESSAGE });

export const UPDATE_NEW_MESSAGE_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: return state;

    }

}

export default dialogsReducer;

