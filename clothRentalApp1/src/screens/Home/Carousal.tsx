import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

import {products} from './Products';

// const {width} = Dimensions.get('window');
const width = 360;
const height = width * 0.6; //60%

const images = [
  'https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',

  'https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=400',
];
const change = ({nativeEvent}) => {
  const slide = Math.ceil(
    nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  );
  if (slide !== this.state.active) {
    this.setState({active: slide});
  }
};
export default class Carousal extends React.Component {
  state = {active: 0};

  change = event => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.state.active
                  ? style.pagingActiveText
                  : style.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    width,
    height,
    borderRadius: 8,
    alignSelf: 'center',
  },

  scroll: {width, height},
  image: {width, height, resizeMode: 'cover', borderRadius: 10},
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {color: '#888', margin: 3},
  pagingActiveText: {fontSize: width / 30, color: '#fff', margin: 3},
});
