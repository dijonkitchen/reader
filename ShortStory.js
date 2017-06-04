import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ShortStory extends React.Component {
  render() {
    let { data } = this.props;
    let title = '';
    let description = '';
    if (data) {
      title = data.title;
      description = data.description.split('<')[0];
    }

    return (
      <View>
        <Image
          styles={styles.thumbnails}
          source={require('./images/placeholder.png')}
        />
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
