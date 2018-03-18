/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Container, Form, Input, Item, Button, Label } from 'native-base' // 2.3.9

import {Actions} from 'react-native-router-flux';


import {firebaseDatabase } from './firebase';
import firebase from './firebase';

export default class LoginView extends Component {

  constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: ''
        })
    }

    signUpUser = (email, password) => {
      try {

          if (this.state.password.length < 6) {
              alert("Please enter atleast 6 characters")
              return;
          }

          firebase.auth().createUserWithEmailAndPassword(email, password)

      }
      catch (error) {
          console.log(error.toString())
      }
  }

  loginUser = (email, password) => {

      try {

          firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
              console.log(user)
              Actions.home()
          })
      }
      catch (error) {
          console.log(error.toString())
      }
  }

  handlePress() {
    Actions.home()
  }
  changeRoot(){
    Actions.home()
  }
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.welcome} onPress={()=>this.handlePress()}> Bienvenidos a PlatziMusic </Text>
        <Form style={styles.form}>
          <Item >
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder ='Email'
                  onChangeText={(email) => this.setState({ email })}
              />
          </Item>

          <Item>
              <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder ='Password'
                  onChangeText={(password) => this.setState({ password })}
              />
          </Item>

          <Button style={styles.button}
              full
              rounded
              success
              onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
              <Text style={{ color: 'black' }}> Login</Text>
          </Button>

          <Button style={styles.button}
              full
              rounded
              primary
              onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
              <Text style={{ color: 'black' }}> Sign Up</Text>
          </Button>
      </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
  },
  form :{
    width: 250,
  },
  button:{
    marginTop: 10,
  }

});
