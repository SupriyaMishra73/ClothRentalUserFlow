import React from 'react';
import Profile from './src/components/Profile/Profile';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import OwnerProfile from './Screens/Owner/OwnerProfile';
// import EditProfile from './Screens/User/EditProfile';
import EditProfile from './Screens/User/EditProfile';

import Carousal from './src/screens/Home/Carousal';
import Homescreen from './src/screens/Home/Homescreen';
import Address from './src/screens/Address/Address';
import Signup from './src/screens/Signup/Signup';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';
import MyStack from './src/screens/userBottomTab/Userstack';
import { NavigationContainer } from '@react-navigation/native';
const MyStackNavigation = () =>{
  return(
<NavigationContainer>
  <MyStack />
</NavigationContainer>
  );
}
function App(): JSX.Element {
  return (
    // <SafeAreaView>
    //   <Text>hello</Text>
    //   <Carousal />
    //   <Homescreen />
    //   <Signup />
    //   <Address />
    //   <Profile />
    //   <OwnerProfile />

    //   <OwnerProfile/>
    //   <EditProfile />
    // </SafeAreaView>

    <Provider  store={store}>
      <MyStackNavigation/>

    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
