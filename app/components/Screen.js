import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import React from 'react';
import reactDom from 'react-dom';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
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
