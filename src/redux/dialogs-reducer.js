const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const ADD_MESSAGEActionCreator = () => ({ type: ADD_MESSAGE });

export const UPDATE_NEW_MESSAGE_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Roma' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'What is your name' },
        { id: 3, message: 'HI, my name is Igor' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };

        }
        default: return state;

    }

}

export default dialogsReducer;

