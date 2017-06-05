import React from 'react';
import {
  StyleSheet,
  WebView,
} from 'react-native';

export default class Story extends React.Component {
  render() {
    let uri = this.props.navigation.state.params.data.origLink;

    return (
      <WebView
        source={{ uri }}
      />
    );
  }
}

const styles = StyleSheet.create({
});
