import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

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

const email = document.getElementById('lemail')
const password = document.getElementById('lpass') 

window.signin = function(){
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'welcome.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

}




window.signin = signin
