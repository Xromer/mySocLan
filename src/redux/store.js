
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


/*export const ADD_PostActionCreator = () => ({ type: ADD_POST });

export const UPDATE_NEW_POST_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const ADD_MESSAGEActionCreator = () => ({ type: ADD_MESSAGE });

export const UPDATE_NEW_MESSAGE_TEXTActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });*/


let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'post  1' },
                { id: 2, post: 'post  2' },
                { id: 3, post: 'post  3' }
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        newsPage: {
            news: [
                { id: 1, news: 'Коронавирус в Украине: количество зафиксированных случаев на 3 мая' }
            ]
        }

    },

    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._callSubscribe = observer;
    },

    _callSubscriber() { },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscribe(this._state);
        /* if (action.type === ADD_POST) {
             let newPost = {
                 id: 5,
                 post: this._state.profilePage.newPostText
             };
             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText = '';
             this._callSubscribe(this._state);
         } else if (action.type === UPDATE_NEW_POST_TEXT) {
             this._state.profilePage.newPostText = action.newText;
             this._callSubscribe(this._state);
         } else 
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscribe(this._state);
        }*/
    }

}

export default store;

window.store = store;





