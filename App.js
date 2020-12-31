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
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import UserInfo from './src/screens/UserInfo';
import HomePage from './src/screens/HomePage';

// const App = () => {
//   return <Login />;
//   // return <Register />;
// };

const Stack = createStackNavigator();
function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
