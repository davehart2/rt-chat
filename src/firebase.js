import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA5kRjopE_x9YTNfIL1UNFJ1OQvM5UpyUA",

    authDomain: "rt-chat-dh.firebaseapp.com",

    projectId: "rt-chat-dh",

    storageBucket: "rt-chat-dh.appspot.com",

    messagingSenderId: "351659845181",

    appId: "1:351659845181:web:cdb0a63e98a835e1e0ec54",
  })
  .auth();
