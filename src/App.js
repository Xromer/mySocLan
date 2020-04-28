import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/dialogs.js';
import Music from './components/music/music.js';
import Settings from './components/settings/settings.js';
import News from './components/news/news.js';
import { Route, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        {/*header*/}
        <Header />

        {/*nav*/}
        <Nav />

        {/*content*/}
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />


      </div>
    </BrowserRouter>
  );
}

export default App;
