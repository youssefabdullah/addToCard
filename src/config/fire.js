// import firebase from 'firebase'
// import 'firebase/storage'
// var firebaseConfig = {
//     apiKey: "AIzaSyBGu-aud6ZbzCG-xsmNKt_fFvKPomfopfM",
//     authDomain: "my-project-359-237706.firebaseapp.com",
//     databaseURL: "https://my-project-359-237706.firebaseio.com",
//     projectId: "my-project-359-237706",
//     storageBucket: "my-project-359-237706.appspot.com",
//     messagingSenderId: "308711556901",
//     appId: "1:308711556901:web:5cb7886e3dcb5222f2bccc"
// };

// export const fire = firebase.initializeApp(firebaseConfig)
// export const userRef = fire.database().ref("users")
// // export const postRef = fire.database().ref("posts")
// export const storeRef = fire.storage();
// export const db = firebase.firestore()
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCSw_LW6rg0gjZ7ViIhEPcgo4TmvWia96k",
    authDomain: "test-bbfb3.firebaseapp.com",
    databaseURL: "https://test-bbfb3.firebaseio.com",
    projectId: "test-bbfb3",
    storageBucket: "test-bbfb3.appspot.com",
    messagingSenderId: "101478109905",
    appId: "1:101478109905:web:5bbf4412325c80bbd2abf0"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
export const fire = firebase.initializeApp(firebaseConfig)
// export const userRef = fire.database().ref("users")
export const postRef = fire.database().ref("posts")
export const storeRef = fire.storage();
export const db = firebase.firestore()