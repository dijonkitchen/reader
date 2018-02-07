import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MainScreenNavigator from './components/MainScreenNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
