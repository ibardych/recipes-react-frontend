import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { ModalOpenedReducer } from './modalOpenedSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loadingReducer } from './loader/slice';
import { userReducer } from './user/slice';
import { generalReducer } from './general/slice';
import { recipesReducer } from './recipes/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userReducer),
    general: generalReducer,
    recipes: recipesReducer,

    user: userReducer,
    modalopened: ModalOpenedReducer,
    loading: loadingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
