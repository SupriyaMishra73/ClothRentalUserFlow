import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// import styles from '../Profile/profilestyles';
import style from './profilestyles';
import ImagePicker from 'react-native-image-picker';

import {Image} from 'react-native';

const Profile = () => {
  return (
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
      </View>

      <View>
        <TouchableOpacity style={style.btnfield}>
          <Text style={style.btntext}>Logout </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
