import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  WEBVIEW_REF = React.createRef();

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.WEBVIEW_REF.current) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
    return false;
  };

  render() {
    return (
      <WebView
        style={{marginTop: 20}}
        renderError={(error) => alert(error)}
        source={{uri: 'https://cvbuilder-3484c.web.app'}}
        ref={this.WEBVIEW_REF}
        startInLoadingState={true}
        allowUniversalAccessFromFileURLs={true}
        javaScriptEnabled={true}
        mixedContentMode={'always'}
      />
    );
  }
}
