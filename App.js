/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './components/HomeView';
import ArtistDetailView from './components/ArtistDetailView';

export default class App extends Component  {

  render() {
    const isAndroid = Platform.OS === 'android'
    return <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} hideNavBar/>
          <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid} />
        </Scene>
      </Router>

  }
}
