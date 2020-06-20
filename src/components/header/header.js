import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://clipartart.com/images/clipart-logo-editor-2.png" />

      <div className={style.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>


  );
}

export default Header;

