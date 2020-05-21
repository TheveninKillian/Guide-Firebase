/** Initialisation */
import * as firebase from "firebase/app";

import {
  firebaseConfig
} from './firebase'

firebase.initializeApp(firebaseConfig)

import "firebase/auth";
import "firebase/firestore";

const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const messageLogin = document.querySelector('.message-login a')
const messageRegister = document.querySelector('.message-register a')
const btnGoogle = document.getElementById('google')

const auth = firebase.auth()
const db = firebase.firestore()

console.log(db)
console.log(auth)

/** Pré execution */

/** Execution fonctionnalité */
messageLogin.addEventListener('click', () => {
  registerForm.style.display = 'block'
  loginForm.style.display = 'none'
  btnGoogle.style.display = 'none'
})

messageRegister.addEventListener('click', () => {
  registerForm.style.display = 'none'
  loginForm.style.display = 'block'
  btnGoogle.style.display = 'block'
})

/** Post execution */

/** Function */