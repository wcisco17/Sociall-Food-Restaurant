import * as firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyAWH7umiEpC8BOv4EZISujVyhnwbDMmoKE",
    authDomain: "restaurantsocially-food.firebaseapp.com",
    databaseURL: "https://restaurantsocially-food.firebaseio.com",
    projectId: "restaurantsocially-food",
    storageBucket: "restaurantsocially-food.appspot.com",
    messagingSenderId: "98174883851"
};

firebase.initializeApp({...firebaseConfig});
