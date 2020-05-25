import React from 'react';
import style from './../dialogs.module.css';



const Messages = (props) => {

    let MessagesElement = props.dialogsPage.messages.map(m => <div> {m.message}</div>);

    //let nMessageElement = React.createRef();убрана за ненадобностью введена новая функция target

    let addMessage = () => {
        props.sendMessage();
    }



    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

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