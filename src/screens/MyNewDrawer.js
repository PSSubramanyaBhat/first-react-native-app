import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import UserProfile from './UserProfile';
import AppInfo from './AppInfo';
import ColorSwitchPage from './ColorSwitchPage';
import NavigationDrawerStructure from './NavigationDrawerStructure';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="AppInfo"
        component={AppInfo}
        options={{
          title: 'App Info', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            // backgroundColor: '#f4511e', //Set Header color
            backgroundColor: '#292929',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            // color: 'white',
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
    //   initialRouteName="AppInfo"
    //   screenOptions={{
    //     headerLeft: () => (
    //       <NavigationDrawerStructure navigationProps={navigation} />
    //     ),
    //     headerStyle: {
    //       // backgroundColor: '#f4511e', //Set Header color
    //       backgroundColor: '#292929',
    //     },
    //     headerTintColor: '#fff', //Set Header text color
    //     headerTitleStyle: {
    //       fontWeight: 'bold', //Set Header text style
    //     },
    //   }}
    >
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'UserProfile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            // backgroundColor: '#f4511e', //Set Header color
            backgroundColor: '#292929',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ColorSwitchPage"
        component={ColorSwitchPage}
        options={{
          title: 'ColorSwitching Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            // backgroundColor: '#f4511e', //Set Header color
            backgroundColor: '#292929',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MyNewDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#333333',
        activeBackgroundColor: 'white',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="AppInfo"
        options={{
          drawerLabel: 'AppInfo',
          // headerTitleStyle: {color: 'white'}
        }}
        component={firstScreenStack}
      />
      <Drawer.Screen
        name="UserProfile"
        options={{
          drawerLabel: 'UserProfile',
          //   backgroundColor: 'red',
          //   headerTitleStyle: {color: 'white'},
          headerStyle: {
            // backgroundColor: '#292929',
            backgroundColor: '#ffffff',
          },
        }}
        component={secondScreenStack}
      />

      <Drawer.Screen
        name="ColorSwitchPage"
        options={{
          drawerLabel: 'ColorSwitching Page',
          //   backgroundColor: 'red',
          //   headerTitleStyle: {color: 'white'},
          headerStyle: {
            // backgroundColor: '#292929',
            backgroundColor: '#ffffff',
          },
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
        component={ColorSwitchPage}
      />
    </Drawer.Navigator>
  );
}
export default MyNewDrawer;
