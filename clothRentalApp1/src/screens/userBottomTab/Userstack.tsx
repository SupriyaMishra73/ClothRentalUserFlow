import React from 'react';
import Profile from '../../screens/Profile/Profile';
// import Home from '../../screens/Home/Home';
import Homescreen from '../Home/Homescreen';
// import OwnerEditProfile from "../../screens/Ownereditprofile/Ownereditprofile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Owneraddresspage from "../../screens/Owneraddaddress/Owneraddresspage";
// import Owneraddaddress from "../../screens/Owneraddaddress/Owneraddaddress";
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyStack = () => {
  const data = useSelector(state => state);
  console.log(data);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={() => ({
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color}) => (
            // <MaterialCommunityIcons name="account" color={color} size={35} />
            <View>
              <MaterialCommunityIcons name="account" color={color} size={35} />
              <View style={styles.Count}>
                <Text style={styles.CountText}>
                  {data.WishlistReducer.length}
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <View>
              <MaterialCommunityIcons name="cart" color={color} size={35} />
              <View style={styles.Count}>
                <Text style={styles.CountText}>{data.CartReducer.length}</Text>
              </View>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default MyStack;

// import React from 'react';
// import Profile from '../../screens/Profile/Profile';
// import Homescreen from '../Home/Homescreen';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Wishlist from '../Wishlist/Wishlist';
// import Cart from '../Cart/Cart';
// import {View, Text, StyleSheet} from 'react-native';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen
//         name="Homescreen"
//         component={Homescreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={35} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Wishlist"
//         component={Wishlist}
//         options={() => ({
//           tabBarLabel: 'Wishlist',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="heart" color={color} size={35} />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={Cart}
//         options={({route}) => ({
//           tabBarLabel: 'Cart',
//           tabBarIcon: ({color}) => (
//             <View>
//               <MaterialCommunityIcons name="cart" color={color} size={35} />
//               <View style={styles.cartCount}>
//                 <Text style={styles.cartCountText}>{'0'}</Text>
//               </View>
//             </View>
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={() => ({
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="heart" color={color} size={35} />
//           ),
//         })}
//       />
//     </Tab.Navigator>
//   );
// };

const styles = StyleSheet.create({
  Count: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
