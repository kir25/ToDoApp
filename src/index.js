import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
import {Provider} from 'react-redux'
import store from './components/store'
///MDB
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
///MDB



ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'))
registerServiceWorker();    
