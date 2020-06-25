import React from 'react';
import style from './../dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';





const Dialog = (props) => {



    if (!props.isAuth) return <Redirect to={'/login'} />
    let DialogElement =
        props.dialogs.map(dialog => <NavLink to={"/dialogs/" + dialog.id} activeClassName={style.active}><div>{dialog.name}</div></NavLink>);



    return (

        <div>
            <div className={style.dialogsItems}>
                {DialogElement}
            </div>
        </div>

    );
}

export default Dialog;