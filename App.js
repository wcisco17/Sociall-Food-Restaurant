import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { store } from './client/dux/store/store'
import { Provider } from "react-redux";
import Index from './client/Index'


export default class App extends React.Component {
    componentDidMount() {
      StatusBar.setHidden(true)
    }
  render() {
    return (
      <Provider store={store} >
          <Index />
      </Provider>
    );
  }
}

