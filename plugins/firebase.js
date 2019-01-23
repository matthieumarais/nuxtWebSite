import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {

        apiKey: "AIzaSyAVZMuLkarNfTULNZ-DpBNaxtJlDRGO8_E",
        authDomain: "hand-a86ce.firebaseapp.com",
        databaseURL: "https://hand-a86ce.firebaseio.com",
        projectId: "hand-a86ce",
        storageBucket: "hand-a86ce.appspot.com",
        messagingSenderId: "874380837457"
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }