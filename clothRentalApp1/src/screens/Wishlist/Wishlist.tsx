// import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import CartItem from '../Cart/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeFromCart,
  removeFromWishlist,
} from '../../redux/actions/Actions';

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     AsyncStorage.getItem('cartData').then(data => {
  //       if (data) {
  //         setCartList(JSON.parse(data));
  //       }
  //     });
  //   }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              isWishlist={'abc'}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
                // AsyncStorage.setItem(
                //   'wishlistData',
                //   JSON.stringify(wishlistData),
                // );
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(x));
                // AsyncStorage.setItem('cartData', JSON.stringify(cartData));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
