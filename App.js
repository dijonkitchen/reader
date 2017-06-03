import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      stories: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this.queryFeed();
  }

  queryFeed() {
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FMostRead'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
      .then(response => response.json())
      .then((responseJson) => {
        const mostRead = responseJson.query.results.item;
        this.setState({
          stories: this.state.stories.cloneWithRows(mostRead),
        });
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.stories}
          renderRow={rowData => <Text>{rowData.title}</Text>}
        />
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
});
