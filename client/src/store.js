import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';

const reducer = combineReducers({
  app: appReducer.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
