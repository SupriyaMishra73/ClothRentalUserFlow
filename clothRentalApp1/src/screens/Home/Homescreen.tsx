import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousal from './Carousal';
import Header from './Header';

import {products} from './Products';
import ProductItem from './ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../../redux/actions/Actions';

const Homescreen = () => {
  const dispatch = useDispatch();

  const [catgoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [jeansList, setJeansList] = useState([]);

  useEffect(() => {
    console.log(products);

    let tempCategory:
      | ((prevState: never[]) => never[])
      | (
          | {
              category: string;
              data: {name: string; price: string; gender: string; img: any}[];
            }
          | {
              category: string;
              data: {name: string; price: number; gender: string; img: any}[];
            }
        )[] = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJacketList(products.category[1].data);
    setJeansList(products.category[2].data);
  }, []);

  const items = useSelector(state => state);
  console.log(items);

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#ECF2FF'}}>
        <Header title={'Leap.'} />
        <Carousal />
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            color: 'purple',
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: 'poppins',
          }}>
          Random Outfits
        </Text>
        <View
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            marginHorizontal: 50,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            color: 'purple',
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: 'poppins',
          }}>
          Jackets
        </Text>
        <View
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            marginHorizontal: 50,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={jacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            color: 'purple',
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: 'poppins',
          }}>
          Jeans
        </Text>
        <View
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            marginHorizontal: 50,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x=>{
                    dispatch(addToWishlist(x));

                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
