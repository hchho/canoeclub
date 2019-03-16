import firebase from './index'

const db = firebase.firestore()

export const dateRef = db.collection(`${new Date().toISOString().slice(0, 10)}`)