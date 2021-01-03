/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Login, Register, UserInfo, HomePage} from './src/screens';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import UserInfo from './src/screens/UserInfo';
import UserProfile from './src/screens/UserProfile';
import AppInfo from './src/screens/AppInfo';
import HomePage from './src/screens/HomePage';
import LandingPage from './src/screens/LandingPage';
import ColorSwitchPage from './src/screens/ColorSwitchPage';
import NavigationDrawerStructure from './src/screens/NavigationDrawerStructure';
// import ModalAlert from './src/screens/ModalAlert';

import {
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Text,
} from 'react-native';

// const CustomAlert = () => {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={true}
//       onRequestClose={() => {
//         Alert.alert('Logout', 'Are you sure?');
//       }}>
//       <View style={styles.modalView}>
//         <Text>Logout</Text>
//         <Button title="Are you sure?" />
//       </View>
//     </Modal>
//   );
// };

const Stack = createStackNavigator();
function App({navigation}) {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    /**Stack nav 1 */
    /**Stack nav 2 is user profile and app info */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login Page',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'SignUp Page',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="UserInfo Page"
          component={UserInfo}
          options={{
            title: 'UserInfo',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              color: 'white',
            },
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
          }}
        />

        <Stack.Screen
          name="AppInfo"
          component={AppInfo}
          options={{
            title: 'AppInfo',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              color: 'white',
            },
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'HomePage',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
          }}
        />

        <Stack.Screen
          name="ColorSwitchPage"
          component={ColorSwitchPage}
          options={{
            title: 'ColorSwitchPage',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
          }}
        />

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            // title: 'LandingPage',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerShown: false,
            // headerTintColor: 'white',
            // headerBackTitle: 'Back',
            // headerRight: () => (
            //   <TouchableOpacity
            //     onPress={() => Alert.alert('Logout', 'Are you sure?')}>
            //     <View style={styles.btn}>
            //       <Image
            //         source={require('./src/assets/images/logout2.png')}
            //         style={styles.img}
            //       />
            //     </View>
            //   </TouchableOpacity>
            // ),
          }}
        />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: 'UserProfile',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              color: 'white',
            },
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    height: 30,
    width: 30,
  },
  img: {
    height: 30,
    width: 30,
  },
  modalView: {
    height: 50,
    width: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;
