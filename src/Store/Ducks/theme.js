import { createActions, createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  darkMode: false
};

export const { Types, Creators } = createActions({
  removeTheme: [''],
  insertTheme: ['data'],
});

const insert = (state = INITIAL_STATE, action) => ({
  ...state,
  ...action.data,
});

const remove = (state = INITIAL_STATE) => ({
  ...state,
  ...INITIAL_STATE,
});

export default createReducer(INITIAL_STATE, {
  [Types.INSERT_THEME]: insert,
  [Types.REMOVE_THEME]: remove,
});
