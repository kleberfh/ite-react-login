import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persist } from './Store';

import Login from "./Components/Login";
import Theme from "./Components/Theme/theme";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Theme>
          <Login />
        </Theme>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
