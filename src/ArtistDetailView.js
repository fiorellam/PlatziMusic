/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';

import Icon from 'react-native-vector-icons/dist/Ionicons';

import {firebaseDatabase, firebaseAuth} from './firebase';

export default class ArtistDetailView extends Component  {

  handleSend = () => {
    const {text} = this.state
    const artistCommentsRef = this.getArtistCommentRef()
    // Create a new post reference with an auto-generated id
    var newCommentRef = artistCommentsRef.push();
    newCommentRef.set({text});
  }

  getArtistCommentRef = () => {
    const {id} = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  render() {
    const artist = this.props.artist
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opina sobre el artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
  inputContainer:{
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    height: 50,
    flex: 1,
  },
});
