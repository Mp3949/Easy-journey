// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1JC1sgLVOw1r9x3__54zygKwx5g2Pc7c",
  authDomain: "esay-journey.firebaseapp.com",
  projectId: "esay-journey",
  storageBucket: "esay-journey.appspot.com",
  messagingSenderId: "317641797157",
  appId: "1:317641797157:web:e6c86c10c5991fb88d59cc",
  measurementId: "G-566EH95T4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("bt1").addEventListener("click", function(){
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;
  createUserWithEmailAndPassword(auth , email , password )
  .then((usercredential) => {
    const user = usercredential.user;
    console.log(user);
    alert("Newuser Created....!!");
  })

.catch((error) => {
    const errrorcode =error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(error);
});
})
        
      