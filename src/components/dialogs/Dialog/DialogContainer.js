import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth

    }
}

let AuthRedirectComponent = withAuthRedirect(Dialog);


const DialogContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default DialogContainer;