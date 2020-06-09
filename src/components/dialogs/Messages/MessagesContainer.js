import React from 'react';
import Messages from "./Messages"
import { UPDATE_NEW_MESSAGE_TEXTActionCreator, ADD_MESSAGEActionCreator } from '../../../redux/dialogs-reducer';
import store from '../../../redux/redux-store';





const MessangersConteainer = (props) => {


    let newMessageText = store.getState().dialogsPage;

    let nMessageElement = store.getState().dialogsPage.messages;

    let addMessage = () => {
        store.dispatch(ADD_MESSAGEActionCreator())
    };

    let onMessageChange = (text) => {
        store.dispatch(UPDATE_NEW_MESSAGE_TEXTActionCreator(text))
    }

    return (
        <div>
            <Messages addMessage={addMessage} onMessageChange={onMessageChange} nMessageElement={nMessageElement} newMessageText={newMessageText} />
        </div>
    );

}
export default MessangersConteainer;