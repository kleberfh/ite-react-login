import {
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
  configureStore,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import theme, { INITIAL_STATE as INITIAL_THEME_STATE } from './Ducks/theme';

const root = combineReducers({
  theme,
});

const persistConfig = {
  storage,
  key: 'root',
  timeout: 3600,
};

const initialState = {
  theme: INITIAL_THEME_STATE,
};

const persistedReducer = persistReducer(persistConfig, root);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: applyMiddleware(thunk),
});

export const persist = persistStore(store);

export default store;
