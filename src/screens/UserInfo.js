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
        <View style={styles.pageStyling}>
          <View style={styles.headerSection}>
            <View style={styles.circularAvtar}>
              <Image
                style={styles.appAvtarImage}
                source={require('../assets/images/studentb.png')}
              />
            </View>
            <Text style={styles.apptitle}>Student Tracker</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textUserInfo}>P.S. Subramanya Bhat</Text>
            <Text style={styles.textUserInfo}>5th Standard</Text>
            <Text style={styles.textUserInfo}>Section: B</Text>
            <Text style={styles.textUserInfo}>Address: a-z</Text>
            <Text style={styles.textUserInfo}>9876543210</Text>
            {/* <View style={[styles.bottomTextView, styles.bottomText]}>
            <Text style={styles.textSmall}>ROBOSOFT PVT. LTD.</Text>
          </View> */}
          </View>
          <View style={styles.footerSection}>
            <View style={[styles.bottomTextView, styles.bottomText]}>
              <Text style={styles.textSmall}>ROBOSOFT PVT. LTD.</Text>
            </View>
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
  pageStyling: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerSection: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: '#333333',
  },
  footerSection: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: '#333333',
  },
  circularAvtar: {
    height: 150,
    width: 150,
    // backgroundColor: 'white',
    borderRadius: 80,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
  },
  appAvtarImage: {
    marginTop: 3,
    marginLeft: 10,
    height: 135,
    width: 128,
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

  bottomTextView: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: 45,
    paddingTop: 10,
  },
  bottomText: {
    alignSelf: 'center',
  },

  textSmall: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 8,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },

  textUserInfo: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
});
export default UserInfo;
