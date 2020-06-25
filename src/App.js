import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs.js';
import Music from './components/music/music.js';
import Settings from './components/settings/settings.js';
import { Route, BrowserRouter } from "react-router-dom";
import NewsContainer from './components/news/newsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';


const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        {/*header*/}
        <HeaderContainer />

        {/*nav*/}
        <Nav />

        {/*content*/}
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/news" component={() => <NewsContainer />} />
        <Route path="/users" component={() => <UsersContainer />} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />

      </div>
    </BrowserRouter>
  );
}

export default App;
