import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAm1-kddgLkqqqiAFINLf87dKCdPXcEAgM',
	authDomain: 'social-network-638c8.firebaseapp.com',
	databaseURL: 'https://social-network-638c8.firebaseio.com',
	projectId: 'social-network-638c8',
	storageBucket: 'social-network-638c8.appspot.com',
	messagingSenderId: '954249406986',
	appId: '1:954249406986:web:6580bf8a6914c490b90df3',
	measurementId: 'G-XLEX0CRC20',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
