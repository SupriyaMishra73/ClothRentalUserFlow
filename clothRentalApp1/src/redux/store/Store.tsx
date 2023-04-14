import {Action, CombinedState, combineReducers, Reducer} from 'redux';

import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';

import CartReducer from '../reducers/CartReducer';
import WishlistReducer from '../reducers/WishlistReducer';


const routeReducer = combineReducers({reducers,WishlistReducer,CartReducer});

export const store = createStore(routeReducer);
// export const store = createStore(Wishlistreducers);
