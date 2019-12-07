let firebaseConfig = {
    apiKey: "AIzaSyA_ToXe8aeSzN9c92s0idgKkgCzHbmYrTc",
    authDomain: "learngeek-f085b.firebaseapp.com",
    databaseURL: "https://learngeek-f085b.firebaseio.com",
    projectId: "learngeek-f085b",
    storageBucket: "learngeek-f085b.appspot.com",
    messagingSenderId: "600989818649",
    appId: "1:600989818649:web:3f14a9380cd4a7f0d82f88",
    measurementId: "G-5SJ439C7CX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export let learnGeekDB = firebase.firestore();
export let learnGeekAuth = firebase.auth();