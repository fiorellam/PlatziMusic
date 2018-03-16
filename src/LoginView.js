/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {Actions} from 'react-native-router-flux';



export default class LoginView extends Component {
  handlePress() {
    Actions.home()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>this.handlePress()}> Bienvenidos a PlatziMusic </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
  }

});
