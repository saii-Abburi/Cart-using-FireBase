import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";



import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDdGMLc85rjA9tv8ZaboYk7thvD7mrrYW4",
    authDomain: "real-time-database-4a07b.firebaseapp.com",
    databaseURL: "https://real-time-database-4a07b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "real-time-database-4a07b",
    storageBucket: "real-time-database-4a07b.appspot.com",
    messagingSenderId: "1030367024160",
    appId: "1:1030367024160:web:c4a5c5baf225d943995845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginBtn = document.getElementById("loginbtn");

loginBtn.addEventListener("click", ()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // ...
    console.log("Account cretaed");
    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

})
