import React from 'react';
import style from './dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';



const Dialogs = (props) => {

  debugger;



  return (

    <div className={style.dialogs}>
      <div>
        <Dialog dialogs={props.dialogs.dialogs} />
      </div>
      <div>
        <Messages messages={props.dialogs.messages} newMessageText={props.dialogs.newMessageText} dispatch={props.dispatch} />
      </div>

    </div>
  );
}

export default Dialogs;

