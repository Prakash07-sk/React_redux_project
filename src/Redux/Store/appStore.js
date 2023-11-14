import {  configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { rootPersistConfig, rootReducer } from './rootReducer';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const appStore = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware:  getDefaultMiddleware =>
  getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
      immutableCheck: false
    }),
  devTools: process.env.NODE_ENV !== 'production' //  to exclude / disable Redux devtools in production
});

const persistor = persistStore(appStore);
const { dispatch } = appStore;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();


export { appStore, persistor, dispatch, useSelector, useDispatch };
