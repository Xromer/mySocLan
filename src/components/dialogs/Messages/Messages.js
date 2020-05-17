import React from 'react';
import style from './../dialogs.module.css';
import { UPDATE_NEW_MESSAGE_TEXTActionCreator, ADD_MESSAGEActionCreator } from '../../../redux/dialogs-reducer';


const Messages = (props) => {

    let MessagesElement = props.messages.map(m => <div> {m.message}</div>);

    //let nMessageElement = React.createRef();убрана за ненадобностью введена новая функция target

    let addMessage = () => {
        props.dispatch(ADD_MESSAGEActionCreator());
    }



    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(UPDATE_NEW_MESSAGE_TEXTActionCreator(text));

    }

    return (
        <div className={style.messages}>
            {MessagesElement}
            <div>
                <textarea onChange={onMessageChange} value={props.newMessageText} ></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>

    );
}

export default Messages;