import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAeYtzBbSuz8NfYAPhGd1bpcGSO_p8Nas4",
    authDomain: "livechatlina.firebaseapp.com",
    projectId: "livechatlina",
    storageBucket: "livechatlina.appspot.com",
    messagingSenderId: "406439579966",
    appId: "1:406439579966:web:91147e43c137e08175dc6f",
    measurementId: "G-2QL5HCG300"
}


// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp}