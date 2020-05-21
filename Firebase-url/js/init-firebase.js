let firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  databaseURL: "#",
  projectId: "#",
  messagingSenderId: "#",
  appId: "#"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

const logout = document.querySelector('.logout')

let name
let email
let password

const googleProvider = new firebase.auth.GoogleAuthProvider()

// Create Account for google
btnGoogle.addEventListener('click', (e) => {

  firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {

      let token = result.credential.accessToken
      let user = result.user
      console.log(user.displayName, token)

    })
    .catch((error) => {
      console.log(error.code + ' : ' + error.message)
    })

})

//Logout
logout.addEventListener('click', (e) => {

  e.preventDefault()

  auth.signOut().then(() => console.log('user signed out'))

})

// Check status users connect
auth.onAuthStateChanged((user) => {

  if (user) {
    console.log(user.displayName)
  } else {
    console.log('sign out')
  }

})

// See what 's in firestore
db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  })
  .catch(error => {
    console.log(error.message)
  })