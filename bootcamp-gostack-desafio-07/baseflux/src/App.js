import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalSyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store/index';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalSyle />
        <ToastContainer autoclose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
