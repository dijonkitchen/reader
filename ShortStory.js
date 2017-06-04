import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const placeholderImage = require('./images/placeholder.png');

export default class ShortStory extends React.Component {
  render() {
    const { data } = this.props;
    let title = '';
    let description = '';
    if (data) {
      title = data.title;
      description = data.description.split('<')[0];
    }

    return (
      <View>
        <View style={styles.container}>
          <Image
            style={styles.thumbnails}
            source={placeholderImage}
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  thumbnails: {
    flex: 1,
    height: 100,
    width: 100,
  },
  title: {
    flex: 2,
    fontWeight: 'bold',
    margin: 15,
  },
  description: {
    margin: 5,
  },
});
