import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import Home from '../pages/Application/Home'
import QRCode from '../pages/Application/QRCode'




const styles = StyleSheet.create({
    icon: {
      width:33,
      height: 33
    }
  })
  
  const routes = {
      QRCode: {
        screen: QRCode,
        navigationOptions: {
          title: 'Scan Code',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../../utils/images/if_qr_code_1613767.png')}
              style={[styles.icon, { tintColor }]}
            />
          )
        }
      },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Feed',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../utils/images/home.png')}
            style={[styles.icon, { tintColor }]}
          />
        )
      }
    },
  }
  
  const routeConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#FF1493',
      inactiveTintColor: '#b9b9b9',
      indicatorStyle: { backgroundColor: '#b9b9b9' },
      labelStyle: {
        fontSize: 12,
        paddingTop: 10
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        paddingBottom: 3
      },
    }
  }
  
  export default createBottomTabNavigator(routes, routeConfig)
  