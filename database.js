const firebase = require("firebase");

var config = {
  apiKey: "AIzaSyAHeka91l_CrcAmPfzyYahie-BqgVnn05c",
  authDomain: "hackday17s.firebaseapp.com",
  databaseURL: "https://hackday17s.firebaseio.com",
  projectId: "hackday17s",
  storageBucket: "hackday17s.appspot.com",
  messagingSenderId: "261685621415"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();
var postRef = rootRef.child('post').push();
var imageRef = rootRef.child('image').push();
var commitRef = rootRef.child('commit').push();


var db = {
  savePost: function(message) {
    postRef.set({
      'ts': message['ts'],
      'author': message['username'],
      'title': message['file']['title'],
      'link': message['file']['permalink']
    });
  },

  saveImage: function(message) {
    imageRef.set({
      'ts': message['ts'],
      'author': message['username'],
      'title': message['file']['title'],
      'link': message['file']['url_private']
    });
  },

  saveCommit: function(message) {
    commitRef.set({

    });
  }
};

module.exports = db;
