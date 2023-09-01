/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyDBy0sHicaV5iZ2fuqhPfOTrsiCUL6h1-4",
  authDomain: "chatapp-112fc.firebaseapp.com",
  projectId: "chatapp-112fc",
  storageBucket: "chatapp-112fc.appspot.com",
  messagingSenderId: "396289661227",
  databaseURL: 'https://chatapp-112fc.firebaseio.com',
  appId: "1:396289661227:web:8392f621c81ce93dc7cd6e",
  measurementId: "G-TXH2QX0SFV",
  
});

firebase.messaging();
