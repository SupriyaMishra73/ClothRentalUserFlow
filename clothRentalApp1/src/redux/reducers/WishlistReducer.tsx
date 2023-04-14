

import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../actions/ActionTypes';

const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      const deletedArray2 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray2;

    default:
      return state;
  }
};

export default WishlistReducer;











