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

const UserInfo = ({navigation}) => {
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
            placeholder="Name"
            style={styles.inputfield}
            // onChangeText={(text) => {
            //   setTextValue(text);
            // }}
            // value={textValue}
          />
          <TextInput placeholder="DOB" style={styles.inputfield} />
          {/* Date Picker Component */}

          <TextInput placeholder="Address" style={styles.inputfield} />

          <TextInput placeholder="Class" style={styles.inputfield} />
          {/* This should br drop down Component */}

          <TextInput placeholder="Section" style={styles.inputfield} />
          {/* This should br drop down Component */}

          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <View style={styles.buttonView}>
              <Text style={styles.textStyling}>SUBMIT</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.bottomTextView, styles.bottomText]}>
            <Text style={styles.textSmall}>ROBOSOFT PVT. LTD.</Text>
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
    marginTop: 20,
    color: 'black',
    // fontFamily: 'monospace',
    // fontFamily: 'Roboto',
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 40,
    width: 150,
    height: 60,
    backgroundColor: 'lightgreen',
    // backgroundColor: 'limegreen',
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
  bottomTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 45,
    paddingTop: 10,
  },
  bottomText: {
    alignSelf: 'center',
  },
  textStyling: {
    color: 'black',
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
    marginTop: 10,
    fontSize: 8,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
});
export default UserInfo;
