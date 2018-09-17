import React, { Component, Fragment } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BarCodeScanner, Permissions, WebBrowser } from 'expo';
import { GradientButton } from "../atoms/Button/GradientButton";


export default class OR extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    return (
      <View style={styles.container}>

        {this.state.hasCameraPermission === null
          ? null
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              :
              <Fragment>

              <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                      height: '60%',
                      width: '80%',
                      borderRadius: 30
                    }}
                    />
            <View style={styles.bottomContainer}>
          <Text style={{ textAlign: 'center', position: 'relative',
          top: 20,
          fontFamily: 'montserrat'
        }}>Scan User's Coin</Text>
            <View style={styles.buttonContainer} >
                <GradientButton
                onPress={() => null }
                text={<Text style={{ color: 'white', fontFamily: 'montserrat' }} >Scan</Text>}
                />
             </View>
            </View>
        </Fragment>
                }

        {this._maybeRenderUrl()}

      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Add Coin',
          onPress: () => WebBrowser.openBrowserAsync(this.state.lastScannedUrl ?
             this.state.lastScannedUrl : `https://${this.state.lastScannedUrl}`),
        },
        { text: 'Cancel', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowOffset:{  width: 6.6,  height: 6.6,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,

  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
  },
//   rgba(0,0,0,0.5)
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  bottomContainer: {
      backgroundColor: 'white',
      height: '20%',
      width: '80%',
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
  },
  buttonContainer: {
      position: 'relative',
      top: 25
  }
});