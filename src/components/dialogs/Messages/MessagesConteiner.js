
import { UPDATE_NEW_MESSAGE_TEXTActionCreator, ADD_MESSAGEActionCreator } from '../../../redux/dialogs-reducer';
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(UPDATE_NEW_MESSAGE_TEXTActionCreator(text));
        },
        sendMessage: () => {
            dispatch(ADD_MESSAGEActionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;