import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CartItem = ({
  item,
  onRemoveItem,
  onAddWishlist,
  onRemoveFromWishlist,
  isWishlist,
  onAddToCart,
}) => {
  return (
    <View
      style={{
        marginTop: 20,
        // width: 200,
        width: '90%',
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.img}
        style={{
          width: '100%',
          height: '50%',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: '600',
          color: 'black',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'green'}}>
          {'₹' + item.price}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'green'}}>
          {item.size}
        </Text>

        {isWishlist ? (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 7,
              paddingTop: 7,
            }}
            onPress={() => {
              onAddToCart(item);
            }}>
            <Text style={{color: 'black'}}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 7,
              paddingTop: 7,
            }}
            onPress={() => {
              onRemoveItem();
            }}>
            <Text style={{color: 'black'}}>Remove Item</Text>
          </TouchableOpacity>
        )}
      </View>

      {isWishlist ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onRemoveFromWishlist(item);
          }}>
          <Image
            source={require('../../../assets/images/heartFill.png')}
            style={{width: 24, height: 24, tintColor: 'red'}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onAddWishlist(item);
          }}>
          <Image
            source={require('../../../assets/images/heart.jpg')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;
