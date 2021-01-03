import React, {useState} from 'react';
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
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  return (
    <>
      <ScrollView style={styles.scrollViewSection}>
        <View style={styles.headerSection}>
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

          <TextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.inputfield}
          />

          {/* <View  
        style={styles.btnContainer}>
          <Button style={styles.btnSize} onPress={() => {}} title="Login" />
        </View> */}

          <TouchableOpacity
            onPress={() => navigation.navigate('UserInfo Page')}>
            <View style={styles.buttonView}>
              <Text style={styles.textStyling}>REGISTER</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.loginNavView, styles.navJustify]}>
            <Text style={styles.textSmall}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.smallButtonView}>
                <Text style={styles.smallButtonText}>LOGIN</Text>
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
    paddingTop: 50,
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
    flex: 4,
    paddingTop: 18,
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
  loginNavView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 45,
    paddingTop: 10,
  },
  navJustify: {
    alignSelf: 'center',
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
export default Register;
