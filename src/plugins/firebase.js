import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: __myapp.env.APIKEY,
    authDomain: __myapp.env.AUTHDOMAIN,
    databaseURL: __myapp.env.DATABASEURL,
    projectId: __myapp.env.PROJECTID,
    storageBucket: __myapp.env.STORAGEBUCKET,
    messagingSenderId: __myapp.env.MESSAGINGSENDERID,
    appId: __myapp.env.APPID
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();