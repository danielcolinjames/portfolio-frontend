import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import apiMiddleware from './middlewares/refreshableAPI';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';

import rootReducer from './reducers';

const authTokensFilter = createFilter('auth', ['access', 'refresh']);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [authTokensFilter]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default (initialState) => {
  let store = createStoreWithMiddleware(persistedReducer, initialState);
  let persistor = persistStore(store)
  return { store, persistor }
}
