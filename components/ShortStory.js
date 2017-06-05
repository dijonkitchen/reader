import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const placeholderImage = require('../images/placeholder.png');

export default class ShortStory extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { data } = this.props;
    let title = '';
    let description = '';
    if (data) {
      title = data.title;
      description = data.description.split('<')[0];
    }

    return (
      <TouchableHighlight
        onPress={() => navigate('Story')}
      >
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
      </TouchableHighlight>
    );
  }
}

ShortStory.navigationOptions = {
  title: 'ShortStory',
};

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
