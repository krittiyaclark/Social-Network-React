import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants'
import { ADD_LOADED } from '../../app/async/asyncReducer'

import firebase from '../../app/config/firebase'
import {
	getUserProfile,
	dataFromSnapshot,
} from '../../app/firestore/firestoreService'
import { listenToCurrentUserProfile } from '../profiles/profileAction'

export function signInUser(user) {
	return {
		type: SIGN_IN_USER,
		payload: user,
	}
}

export function verifyAuth() {
	return function (dispatch) {
		return firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch(signInUser(user))
				const profileRef = getUserProfile(user.uid)
				profileRef.onSnapshot((snapshot) => {
					dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)))
					dispatch({ type: ADD_LOADED })
				})
			} else {
				dispatch(signOutUser())
				dispatch({ type: ADD_LOADED })
			}
		})
	}
}

export function signOutUser() {
	return {
		type: SIGN_OUT_USER,
	}
}
