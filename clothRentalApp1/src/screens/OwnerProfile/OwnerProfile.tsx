import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import style from './OwnerStyles';

import {Image} from 'react-native';
import SwitchAccountButton from './SwitchAccountButton';

import EditProfile from '../../../Screens/User/EditProfile';

const OwnerProfile = () => {
  // const handleNavigation = () => {
  //   navigation.navigate(EditProfile);
  // };

  return (
    <View>
      <View style={style.profileStyle}>
        <View>
          <Image
            source={require('../../../assets/images/UserProfilePic.jpg')}
            style={style.profileImg}
          />
        </View>

        <View>
          <Text style={style.profileText}>Vishal</Text>
        </View>

        <View style={style.profileFields}>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OwnerProfile;
