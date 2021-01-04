import React, {useState, useRef} from 'react';
import Login from './Login';
import MyDrawer from './MyDrawer';
import MyNewDrawer from './MyNewDrawer';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import AppInfo from './AppInfo';
import NavigationDrawerStructure from './NavigationDrawerStructure';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DraggableView from '../components/DraggableView';
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
  Modal,
  Alert,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const createThreeButtonAlert = () => {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};

const TryPage = () => {
  const [fadeInAnimation, setFadeInAnimation] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animationFunction = () => {
    // if (fadeInAnimation === true) {
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 2000,
    //   }).start();
    // } else {
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 2000,
    //   }).start();
    // }
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutAnimationFunction = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeAnim}}>
        <TouchableOpacity onPress={createThreeButtonAlert}>
          <View style={styles.buttonView}>
            <Text style={styles.textStyling}>2-Button Alert</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <View style={{alignItems: 'center'}}>
        <View style={{zIndex: 1}}>
          <DraggableView />
        </View>
        <TouchableOpacity>
          <View style={styles.buttonView}>
            <Text style={styles.textStyling}>API Button</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setFadeInAnimation(!fadeInAnimation);
          if (fadeInAnimation === true) {
            animationFunction();
          } else {
            fadeOutAnimationFunction();
          }
        }}>
        <View style={styles.buttonView}>
          <Text style={styles.textStyling}>Animation Triggerer</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333',
    justifyContent: 'space-between',
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: 150,
    height: 60,
    backgroundColor: 'mediumslateblue',
    borderRadius: 5,
  },
  textStyling: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 18,
    fontSize: 16,
    fontWeight: '200',
  },
});

export default TryPage;
