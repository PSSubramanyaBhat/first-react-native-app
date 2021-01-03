import React, {useState} from 'react';
import MyDrawer from './MyDrawer';
import Divider from './Divider';
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

const UserProfile = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  return (
    <>
      <ScrollView style={styles.scrollViewSection}>
        <MyDrawer />
        <View style={styles.pageStyling}>
          <View style={styles.pageContent}>
            <View style={styles.headerSection}>
              <View style={styles.circularAvtar}>
                <Image
                  style={styles.appAvtarImage}
                  source={require('../assets/images/studentb.png')}
                />
              </View>
              {/* <Text style={styles.apptitle}>Student Tracker</Text> */}
              <Text style={styles.apptitle}>P.S. Subramanya Bhat</Text>
            </View>
            <View style={styles.container}>
              {/* <Text style={styles.textUserInfo}>P.S. Subramanya Bhat</Text> */}
              <Text style={styles.textUserInfo}>5th Standard</Text>
              <Text style={styles.textUserInfo}>Section: B</Text>
              <Text style={styles.textUserInfo}>Address: a-z</Text>
              <Text style={styles.textUserInfo}>9876543210</Text>
              {/* <View style={[styles.bottomTextView, styles.bottomText]}>
            <Text style={styles.textSmall}>ROBOSOFT PVT. LTD.</Text>
          </View> */}
            </View>
          </View>

          <View style={styles.footerSection}>
            <Divider />
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
    justifyContent: 'space-around',
    // alignContent: 'space-around',
    // position: 'absolute',
    marginHorizontal: 2,
  },
  pageContent: {
    marginTop: 10,
    marginHorizontal: 8,
    // paddingTop: -30,
    paddingBottom: 50,
    paddingLeft: -10,
    // backgroundColor: '#333333',
    backgroundColor: '#333333',
    elevation: 20,
    borderTopColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    flex: 1,
    flexDirection: 'row',
  },
  headerSection: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 50,
    marginLeft: 20,
    backgroundColor: '#333333',
    // elevation: 5,
  },
  footerSection: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: '#333333',
    // elevation: 5,
  },
  circularAvtar: {
    height: 100,
    width: 100,
    // backgroundColor: 'white',
    borderRadius: 80,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    // marginLeft: 10,
    alignSelf: 'center',
  },
  appAvtarImage: {
    marginTop: 3,
    marginLeft: 5,
    height: 90,
    width: 90,
    alignSelf: 'center',
    borderRadius: 50,
  },
  apptitle: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'Roboto',
  },
  container: {
    flex: 4,
    paddingTop: 50,
    marginRight: 20,
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
    justifyContent: 'center',
    marginTop: 10,
    // fontSize: 20,
    fontSize: 13,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },
});
export default UserProfile;
