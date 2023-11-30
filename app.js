import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHtgiN40abUc5kdjwWLdx9CF3UFBj3xw4",
  authDomain: "smit-practice-63c33.firebaseapp.com",
  projectId: "smit-practice-63c33",
  storageBucket: "smit-practice-63c33.appspot.com",
  messagingSenderId: "371510594488",
  appId: "1:371510594488:web:33ed7cdf10598dff98dd4d",
  measurementId: "G-015ZKDK3TQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const semail = document.getElementById('semail')
const spass = document.getElementById('spass')



window.signup = function(){  
  createUserWithEmailAndPassword(auth, semail.value, spass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location = 'signin.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

}

window.signup = signup