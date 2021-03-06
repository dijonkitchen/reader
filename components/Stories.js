import React from 'react';
import {
  ListView,
  AsyncStorage,
  RefreshControl,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import ShortStory from './ShortStory';

export default class Stories extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      stories: ds.cloneWithRows([]),
      refreshing: false,
      feed: 'http://feeds.reuters.com/reuters/topNews',
    };
  }

  componentDidMount() {
    this.queryFeed();
  }

  async queryFeed() {
    try {
      const stories = await AsyncStorage.getItem('stories');
      if (stories !== null) {
        this.setState({
          stories: this.state.stories.cloneWithRows(JSON.parse(stories)),
        });
      }
    } catch (error) {
      console.error(error);
    }

    const yql = 'https://query.yahooapis.com/v1/public/yql';
    const query = '?q=select%20*%20from%20rss%20where%20url%3D';
    const feed = `'${this.state.feed}'`;
    const options = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    const fetchURL = yql + query + feed + options;

    fetch(fetchURL)
      .then(response => response.json())
      .then((responseJson) => {
        const mostRead = responseJson.query.results.item;
        this.setState({
          stories: this.state.stories.cloneWithRows(mostRead),
        });
        this.storeFeed(mostRead);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async storeFeed(stories) {
    try {
      await AsyncStorage.setItem('stories', JSON.stringify(stories))
    } catch (error) {
      console.error(error)
    }
  }

  handleOnRefresh = () => {
    this.setState({ refreshing: true });
    this.queryFeed().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType='url'
          style={{ height: 30, padding: 5 }}
          placeholder="Paste a RSS feed here and search!"
          defaultValue="http://feeds.reuters.com/reuters/topNews"
          selectTextOnFocus
          onSubmitEditing={(event) => {
            this.setState(
              { feed: event.nativeEvent.text.trim() },
              this.queryFeed
            );
          }}
          returnKeyType="search"
        />
        <ListView
          enableEmptySections
          dataSource={this.state.stories}
          renderRow={(rowData) => {
            return (
              <ShortStory
                data={rowData}
                navigation={this.props.navigation}
              />
            );
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleOnRefresh}
            />
          }
        />
      </View>
    );
  }
}

Stories.navigationOptions = {
  title: 'Stories',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
