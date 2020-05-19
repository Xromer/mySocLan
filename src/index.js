import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let renderEntireTree = () => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>, document.getElementById('root')
    );
}

renderEntireTree(store.getState());

serviceWorker.unregister();


store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});