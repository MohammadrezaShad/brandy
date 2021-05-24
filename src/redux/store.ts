import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {createWrapper, MakeStore} from 'next-redux-wrapper';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import rootReducer from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [...getDefaultMiddleware<RootState>()];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export const makeStore: MakeStore = (): EnhancedStore => store;

export const reduxWrap = createWrapper(makeStore);

type AppDispatch = typeof store.dispatch;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
