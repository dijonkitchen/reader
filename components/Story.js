import React from 'react';
import {
  StyleSheet,
  WebView,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      html: `
          <body>
            <p>
              Loading!
            </p>
          </body>
      `,
    };
  }

  componentDidMount () {
    let uri = this.props.navigation.state.params.data.origLink;
    this.setHTML(uri)
  }

  setHTML(uri) {
    fetch(uri)
      .then(response => response.text())
      .then(html => {
        this.setState({ html })
      });
  }

  render() {
    return (
      <HTMLView
        value={this.state.html}
      />
    );
  }
}

const styles = StyleSheet.create({
});
