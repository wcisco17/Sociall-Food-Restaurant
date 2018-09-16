import * as firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyAbXc8dujyZeXAEHzhlUeqKQtQG7L_Q3zc",
    authDomain: "auth-fire-911ab.firebaseapp.com",
    databaseURL: "https://auth-fire-911ab.firebaseio.com",
    projectId: "auth-fire-911ab",
    storageBucket: "auth-fire-911ab.appspot.com",
    messagingSenderId: "454722577928"
};

firebase.initializeApp(firebaseConfig);
