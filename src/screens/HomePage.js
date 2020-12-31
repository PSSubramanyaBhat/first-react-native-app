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

const HomePage = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  return (
    <>
      <StatusBar backgroundColor="#222222" barStyle="light-content" />
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
          <View style={styles.gridContainerView}>
            <View style={styles.gridColumn1}>
              <View style={styles.buttonView}>
                <Image
                  style={styles.optionImage}
                  source={require('../assets/images/attendance.png')}
                />
                <Text style={styles.textStyling}>ATTENDANCE</Text>
              </View>
              <View style={styles.buttonView}>
                <Image
                  style={styles.optionImage}
                  source={require('../assets/images/calander.png')}
                />
                <Text style={styles.textStyling}>CALANDER</Text>
              </View>
            </View>
            <View style={styles.gridColumn2}>
              <View style={styles.buttonView}>
                <Image
                  style={styles.optionImage}
                  source={require('../assets/images/reportcard.png')}
                />
                <Text style={styles.textStyling}>REPORT CARD</Text>
              </View>
              <View style={styles.buttonView}>
                <Image
                  style={styles.optionImage}
                  source={require('../assets/images/timetable.png')}
                />
                <Text style={styles.textStyling}>TIME TABLE</Text>
              </View>
            </View>
          </View>

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
    height: 60,
    width: 60,
    // backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
  },
  appAvtarImage: {
    marginTop: 9,
    height: 45,
    width: 56,
    alignSelf: 'center',
    borderRadius: 50,
  },
  optionImage: {
    marginTop: 15,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  apptitle: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'Roboto',
  },
  container: {
    alignSelf: 'center',
    marginTop: 30,
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
  buttonView: {
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  gridContainerView: {
    marginLeft: -10,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  gridColumn1: {
    flex: 1,
    flexDirection: 'row',
  },
  gridColumn2: {
    flex: 1,
    flexDirection: 'row',
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
  textSmall: {
    color: 'white',
    textAlign: 'right',
    marginTop: 10,
    fontSize: 8,
    fontWeight: 'bold',
    // fontFamily: 'monospace',
    // fontFamily: 'JosefinSans-Bold',
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
});
export default HomePage;
