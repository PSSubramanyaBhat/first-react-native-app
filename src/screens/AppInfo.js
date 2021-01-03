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

const AppInfo = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  return (
    <>
      <ScrollView style={styles.scrollViewSection}>
        <MyDrawer />
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
            <View style={styles.listBoxStyling1}>
              <Text style={styles.listTextStyle}>
                This is a student oriented application that we have built to
                assist them in being in constant touch of regular events
                happenning in the school
              </Text>
            </View>
            <View style={styles.listBoxStyling2}>
              <Text style={styles.listTextStyle}>
                This application is also made for the purpose of parents to be
                able to get proper information on their child, example know if
                they have class or no and also the report cards will be sent to
                their emails
              </Text>
            </View>

            <View style={styles.listBoxStyling1}>
              <Text style={styles.listTextStyle}>
                This application mainly has a feature that shows how many
                classes the student has attended and the percentage and more
              </Text>
            </View>

            <View style={styles.listBoxStyling2}>
              <Text style={styles.listTextStyle}>
                The other feature basically is to show the complete event list
                and time table of an academic year so that the student or their
                parents dont go uninformed or mislead regarding it in the first
                place
              </Text>
            </View>

            <View style={styles.listBoxStyling1}>
              <Text style={styles.listTextStyle}>
                And final feature is to kee continuosly updating all year marks
                card of a student in the app from the very 1st year so as to it
                can also serve as an official documentation for later purposes
                as well as the parents can have a look at their child's progress
              </Text>
            </View>

            {/* <View style={[styles.bottomTextView, styles.bottomText]}>
            <Text style={styles.textSmall}>ROBOSOFT PVT. LTD.</Text>
          </View> */}
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
    paddingTop: 5,
    marginBottom: 20,
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
    // fontFamily: 'Roboto-Bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
  },

  listTextStyle: {
    fontSize: 12,
    color: 'white',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  listBoxStyling1: {
    marginBottom: 10,
    marginHorizontal: 2,
    // borderTopColor: '#333333',
    // borderLeftColor: '#333333',
    // borderRightColor: '#333333',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderBottomColor: 'white',
    backgroundColor: '#222222',
    elevation: 5,
  },

  listBoxStyling2: {
    marginBottom: 10,
    marginHorizontal: 2,
    // borderTopColor: '#333333',
    // borderLeftColor: '#333333',
    // borderRightColor: '#333333',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderBottomColor: 'white',
    backgroundColor: '#444444',
    elevation: 5,
  },
});
export default AppInfo;

/**Modal, alert,
 * switch dark mode switch and other components like list-> flattiles/flatlists and ,more
 * To use variable and components from other folders of src
 * List Flat tile for those 5 texts...
 */
