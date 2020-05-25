import React from 'react';

import Dialog from "./Dialog";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs

    }
}



const DialogContainer = connect(mapStateToProps)(Dialog);

export default DialogContainer;