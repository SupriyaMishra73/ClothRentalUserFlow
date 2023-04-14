import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

const RootReducers = combineReducers({
  // reducers
  Reducers,
  products: ProductSlice,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
