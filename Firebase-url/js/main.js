/** Initialisation */
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const messageLogin = document.querySelector('.message-login a')
const messageRegister = document.querySelector('.message-register a')
const btnGoogle = document.getElementById('google')

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