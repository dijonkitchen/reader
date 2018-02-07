import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import MainScreenNavigator from './components/MainScreenNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const App = () => (
  <View style={styles.container}>
    <MainScreenNavigator />
  </View>
)

export default App
