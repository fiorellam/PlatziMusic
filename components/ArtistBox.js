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

export default class ArtistBox extends Component {
  render() {
    const image = 'https://0b704daaaeca42047be7-e9eda9b75b7eaa5ed72327ff54b07596.ssl.cf1.rackcdn.com/images/eventos/5158/imagens/thumb/moraten-bogota.jpg?1506717413'
    const name = 'Morat'
    const likes = 200
    const comments = 140

    return (

      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="gray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox:{
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', //alinea el contenido en el eje flexDirection seleccionado
  },
  name:{
    fontSize: 22,
    marginTop: 10,
    color: '#333',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer:{
    flex:1,
    alignItems: 'center',
  },
  count:{
    color:'gray',
  }

});
