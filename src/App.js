import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/dialogs.js';
import Music from './components/music/music.js';
import Settings from './components/settings/settings.js';
import { Route, BrowserRouter } from "react-router-dom";
import NewsContainer from './components/news/newsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';


const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        {/*header*/}
        <Header />

        {/*nav*/}
        <Nav />

        {/*content*/}
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/news" component={() => <NewsContainer />} />
        <Route path="/users" component={() => <UsersContainer />} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />

      </div>
    </BrowserRouter>
  );
}

export default App;
