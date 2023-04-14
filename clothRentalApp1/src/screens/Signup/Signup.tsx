import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const Signup = () => {
  const [Username, setUsername] = useState<string>('');
  const [PhoneNumbererror, setPhoneNumbererror] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>SignUp</Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardText}>Username</Text>
          </View>
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="Enter Username"
              placeholderTextColor={'#3E54AC'}
              value={Username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          {/* {PhoneNumbererror.length > 0 && (
            <Text style={{marginTop: 5, color: 'red'}}>{PhoneNumbererror}</Text>
          )} */}
          <View>
            <Text style={styles.cardText}>Email /Phone Number</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter phone number"
              placeholderTextColor={'#3E54AC'}
            />
          </View>
          <View>
            <Text style={styles.cardText}>Password</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter password"
              placeholderTextColor={'#3E54AC'}
            />
          </View>
          <View>
            <Text style={styles.cardText}> Confirm Password</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Confirm password"
              placeholderTextColor={'#3E54AC'}
            />
          </View>
          {/* onPress={submit} */}
        </View>
        <TouchableOpacity style={styles.touchablebtn}>
          <Text style={styles.subTitileText}>SignUp</Text>
        </TouchableOpacity>

        <View style={styles.Logintext}>
          <Text style={styles.dontText}>
            Already have Account ?<Text style={styles.sign}> Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ECF2FF',
    height: 800,
    width: 400,
  },
  container: {
    width: 300,
    margin: 26,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#3E54AC',
    margin: 15,
  },
  titleTextContainer: {
    height: 150,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#3E54AC26',
    height: 420,
    width: 320,
    padding: 30,
    borderRadius: 15,

    margin: 15,
    justifyContent: 'center',
    shadowColor: '#52006A',
    // elevation: 1,
  },
  cardText: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: '700',
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3E54AC',
  },
  touchableText: {
    // margin:15,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 320,
    backgroundColor: '#3E54AC',
    margin: 15,
    marginTop: 10,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchablebtnContainer: {
    justifyContent: 'center',
    // alignItems:"center",
  },
  subTitileText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  Logintext: {
    marginTop: 10,
    alignItems: 'center',
    marginRight: 20,
    margin: 15,
  },
  sign: {
    color: '#3E54AC',
    fontSize: 14,
    opacity: 3,
  },

  dontText: {
    margin: 25,
    marginTop: 1,
    marginRight: 2,
    marginBottom: 10,
  },
});
