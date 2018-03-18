import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD0UuMYgGGuDaAoyj8xLkOsuCdJaKtc8L0",
    authDomain: "platzimusic-caa84.firebaseapp.com",
    databaseURL: "https://platzimusic-caa84.firebaseio.com",
    projectId: "platzimusic-caa84",
    storageBucket: "platzimusic-caa84.appspot.com",
    messagingSenderId: "59978537604"
  };

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();

export const firebaseDatabase = firebase.database();

export default firebase
