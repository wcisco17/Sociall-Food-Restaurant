import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { store } from './client/dux/store/store'
import { Provider } from "react-redux";
import Index from './client/Index'
import { Loader } from "./client/components/organisms/Loader";

export default class App extends React.Component {
  state = {
    isLoading: false
  }
    componentDidMount() {
      StatusBar.setHidden(true)
      setInterval(() => {
        this.state.isLoading === false ?
          this.setState((prevState) => ({
              isLoading: !prevState.isLoading
          })) : this.state.isLoading === true
      }, 1200) 
    }

    componentWillUnmount() {
      clearInterval(this.state.isLoading)
    }
  render() {
    return (
      this.state.isLoading ?
      <Provider store={store} >
        <Index />
      </Provider>
        : <Loader fontLoaded={store.getState()} />
    );
  }
}

