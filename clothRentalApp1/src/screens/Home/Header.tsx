import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#BebeBe',
        backgroundColor: '#fff',

        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Text
        style={{
          marginLeft: 15,
          fontWeight: '900',
          fontFamily: 'poppins',
          fontSize: 18,
          color: '#3E54AC',
        }}>
        {/* Leap. */}
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
