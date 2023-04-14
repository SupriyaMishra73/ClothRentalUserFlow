import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import style from './EditProfileStyles';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');
  const [value, setValue] = useState('');

  const handleRadioPress = newValue => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  const handleUpdate = () => {
    // Perform update action here
    Alert.alert('Profile updated!');
  };

  const handleReset = () => {
    // Perform reset action here
    setName('');
    setEmail('');
    setPassword('');
    setTelephone('');
    setGender('');
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.addAddressHeader}>
          <TouchableOpacity
            style={style.backBtn}
            // onPress={() => {
            //   navigation.goBack();
            // }}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={style.btnImage}></Image>
          </TouchableOpacity>

          <Text style={style.addAddressText}>Add Address</Text>
        </View>

        <View style={style.cardStyle}>
          <View>
            <Text style={style.text}>Name</Text>
            <TextInput
              style={style.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />

            <Text style={style.text}>Email</Text>
            <TextInput
              style={style.input}
              placeholder="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <Text style={style.text}>Password</Text>
            <TextInput
              style={style.input}
              placeholder="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <Text style={style.text}>Telephone</Text>
            <TextInput
              style={style.input}
              placeholder="Telephone Number"
              value={telephone}
              onChangeText={text => setTelephone(text)}
            />
          </View>

          <View>
            <Text style={style.text}>Gender:</Text>

            <View style={style.radioContainer}>
              <View style={style.containerRadio}>
                <TouchableOpacity onPress={() => handleRadioPress('male')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {value === 'male' && <View style={style.radioChecked} />}
                    {value !== 'male' && <View style={style.radioUnchecked} />}

                    <Text style={style.radioButtonText}>Male</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleRadioPress('female')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {value === 'female' && <View style={style.radioChecked} />}
                    {value !== 'female' && (
                      <View style={style.radioUnchecked} />
                    )}
                    <Text style={style.radioText2}>Female</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={style.buttons}>
          <TouchableOpacity style={style.btnfield} onPress={handleReset}>
            <Text style={style.btntext}>Reset </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnfield} onPress={handleUpdate}>
            <Text style={style.btntext}>Update </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
