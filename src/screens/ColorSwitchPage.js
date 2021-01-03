import React, {useState} from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';

function ColorSwitchPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={
        isEnabled
          ? {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#333333',
            }
          : {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
            }
      }>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text
        style={
          isEnabled
            ? {
                color: '#ffffff',
                fontWeight: 'bold',
              }
            : {
                color: '#333333',
                fontWeight: 'bold',
              }
        }>
        The text color
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLightMode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  containerDarkMode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
});
export default ColorSwitchPage;
