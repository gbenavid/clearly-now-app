import firebase from 'firebase';

var const = {
    apiKey: "AIzaSyCZ7Z8BRk86TwkAokjvektiGyXM2zZDdLw",
    authDomain: "clearly-now-app.firebaseapp.com",
    databaseURL: "https://clearly-now-app.firebaseio.com",
    projectId: "clearly-now-app",
    storageBucket: "clearly-now-app.appspot.com",
    messagingSenderId: "894780155237"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
