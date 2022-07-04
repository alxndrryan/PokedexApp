import { StyleSheet, Text, View } from 'react-native';

import Navbar from './app/components/Navbar';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <Navbar />
    </Screen>
  );
}
