import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreenNavigator from './MainScreenNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator style={styles.nav}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    width: Dimensions.get('window').width,
  },
});
