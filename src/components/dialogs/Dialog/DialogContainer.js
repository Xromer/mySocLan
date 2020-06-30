import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}

/*compose (
    connect(mapStateToProps),
    withAuthRedirect
)(Dialog)

let AuthRedirectComponent = withAuthRedirect(Dialog);


const DialogContainer = connect(mapStateToProps)(AuthRedirectComponent);*/ //compose

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialog);