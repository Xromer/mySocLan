import Dialog from "./Dialog";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth

    }
}



const DialogContainer = connect(mapStateToProps)(Dialog);

export default DialogContainer;