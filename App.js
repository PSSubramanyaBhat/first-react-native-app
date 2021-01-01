/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Login, Register, UserInfo, HomePage} from './src/screens';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import UserInfo from './src/screens/UserInfo';
import HomePage from './src/screens/HomePage';
import LandingPage from './src/screens/LandingPage';

import {
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {IconButton, Colors} from 'react-native-paper';

// const App = () => {
//   return <Login />;
//   // return <Register />;
// };

const Stack = createStackNavigator();
function App({navigation}) {
  return (
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
          }}
        />

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            title: 'LandingPage',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#292929',
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back',
            headerRight: () => (
              <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                onPress={() => Alert.alert('Logout', 'Are you sure?')}>
                <View style={styles.btn}>
                  <Image
                    source={require('./src/assets/images/logout2.png')}
                    style={styles.img}
                  />
                </View>
              </TouchableOpacity>
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
});

export default App;
