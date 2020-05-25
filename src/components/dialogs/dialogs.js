import React from 'react';
import style from './dialogs.module.css';


import MessagesContainer from './Messages/MessagesConteiner';
import DialogContainer from './Dialog/DialogContainer';



const Dialogs = (props) => {

  debugger;



  return (

    <div className={style.dialogs}>
      <div>
        <DialogContainer />
      </div>
      <div>
        <MessagesContainer />
      </div>

    </div>
  );
}

export default Dialogs;

