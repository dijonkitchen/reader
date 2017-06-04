import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ShortStory extends React.Component {
  render() {
    return (
      <View>
        <Image
          styles={styles.thumbnails}
          source={require('./images/placeholder.png')}
        />
        <Text>{this.props.data ? this.props.data.title : ''}</Text>
        <Text>{this.props.data ? this.props.data.description : ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
