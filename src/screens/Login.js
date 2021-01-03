import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <ScrollView style={styles.scrollViewSection}>
        <View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.headerSection}>
          {/* <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View> */}
          <View style={styles.circularAvtar}>
            <Image
              style={styles.appAvtarImage}
              source={require('../assets/images/studenta.png')}
            />
          </View>
          <Text style={styles.apptitle}>Student Tracker</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            placeholder="Email"
            style={styles.inputfield}
            // onChangeText={(text) => {
            //   setTextValue(text);
            // }}
            // value={textValue}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputfield}
          />

          {/* <View  
        style={styles.btnContainer}>
          <Button style={styles.btnSize} onPress={() => {}} title="Login" />
        </View> */}

          <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}>
            <View style={styles.buttonView}>
              <Text style={styles.textStyling}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.registerNavView, styles.navJustify]}>
            <Text style={styles.textSmall}>Dont have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View style={styles.smallButtonView}>
                <Text style={styles.smallButtonText}>REGISTER</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.navJustify}>
            <Text style={styles.textStyling}>Or Login with</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View style={styles.googleButtonView}>
                <Text style={styles.googleTextStyling}>GOOGLE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewSection: {
    backgroundColor: '#333333',
  },
  headerSection: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 100,
    backgroundColor: '#333333',
  },
  circularAvtar: {
    height: 100,
    width: 100,
    // backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
  },
  appAvtarImage: {
    marginTop: 9,
    height: 85,
    width: 96,
    alignSelf: 'center',
    borderRadius: 50,
  },
  apptitle: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 18,
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'Roboto',
  },
  container: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: '#333333',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  inputfield: {
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 12,
    color: 'black',
    // fontFamily: 'monospace',
    // fontFamily: 'Roboto',
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 15,
    width: 150,
    height: 60,
    backgroundColor: 'mediumslateblue',
    borderRadius: 5,
    // underlayColor: 'red',
  },
  smallButtonView: {
    marginTop: 15,
    marginLeft: 10,
    width: 80,
    height: 25,
    backgroundColor: 'mediumslateblue',
    borderRadius: 5,
  },
  googleButtonView: {
    marginTop: 15,
    marginLeft: 10,
    width: 220,
    height: 40,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  googleTextStyling: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
  registerNavView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 45,
    paddingTop: 10,
  },
  navJustify: {
    alignSelf: 'center',
  },
  alternativeNavView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // paddingHorizontal: 45,
    paddingTop: 10,
  },
  textStyling: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 18,
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
  smallButtonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
  },
  textSmall: {
    color: 'white',
    textAlign: 'right',
    paddingTop: 18,
    fontSize: 12,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
});
export default Login;

/**
 * -----NOTE:-----
 * First learn about props in react native
 * then integrate all old dev tools learnt like plop, storybook etc
 * then build components
 * then pass prop to it to make it dynamically useable
 * 1st Component is Circular Avatar with height an dwidth size as prop...
 */
