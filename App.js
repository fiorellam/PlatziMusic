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
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

import ArtistBox from './components/ArtistBox';

export default class App extends Component  {
  render() {
    const artist = {
      image: 'https://0b704daaaeca42047be7-e9eda9b75b7eaa5ed72327ff54b07596.ssl.cf1.rackcdn.com/images/eventos/5158/imagens/thumb/moraten-bogota.jpg?1506717413',
      name: 'Morat',
      likes: 67200,
      comments: 45140
    }
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
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
