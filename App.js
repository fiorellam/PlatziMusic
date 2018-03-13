/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

import ArtistList from './components/ArtistList';
import { getArtists } from './components/api-client';

export default class App extends Component  {
  state = {
    artists: []

  }

  componentDidMount(){
    getArtists()
      .then(data => this.setState({artists: data}))
  }

  render() {
    const artists = this.state.artists
    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});
