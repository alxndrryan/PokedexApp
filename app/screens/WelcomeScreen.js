import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Screen from '../components/Screen';

function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/pokedex-1.jpg')}
        />
        <Image
          style={styles.tagline}
          source={require('../assets/poke-tagline.png')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" style={styles.login} color="tertiary" />
        <Button title="Register" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: colors.primary
  },
  login: {
    color: colors.secondary
  },
  logo: {
    borderRadius: 25,
    borderWidth: 5,
    borderColor: colors.tertiary,
    width: 180,
    height: 275,
    marginTop: 35
  },
  logoContainer: {
    alignItems: 'center'
  },
  tagline: {
    marginTop: 35
  }
});

export default WelcomeScreen;
