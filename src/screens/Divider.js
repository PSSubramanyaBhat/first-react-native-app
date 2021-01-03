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

const Divider = () => {
  return (
    <>
      <View style={styles.dividerStyle}></View>
    </>
  );
};

const styles = StyleSheet.create({
  dividerStyle: {
    height: 1,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 0.4,
  },
});
export default Divider;
