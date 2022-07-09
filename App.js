import { StyleSheet, Text, View } from 'react-native';

import Navbar from './app/components/Navbar';
import Screen from './app/components/Screen';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <HomeScreen />;
}
