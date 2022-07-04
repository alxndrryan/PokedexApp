import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import React from 'react';

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  view: {
    flex: 1
  }
});

export default Screen;
