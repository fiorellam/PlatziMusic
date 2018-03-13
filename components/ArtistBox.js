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
    const {image, name, likes, comments} = this.props.artist

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
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .9,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 4,
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
