import React, {useState} from 'react';
import Login from './Login';
import HomePage from './HomePage';
import UserInfo from './UserInfo';
import AppInfo from './AppInfo';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserInfo" component={UserInfo} />
      <Tab.Screen name="HomePage" component={HomePage} />
    </Tab.Navigator>
  );
}

const LandingPage = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  return (
    <>
      <StatusBar backgroundColor="#222222" barStyle="light-content" />
      <View style={styles.container}>
        <MyTabs />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewSection: {
    backgroundColor: '#333333',
  },
  bottomBarView: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    justifyContent: 'space-around',
    // marginTop: 100,
    // alignSelf:
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333',
    // justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
export default LandingPage;
