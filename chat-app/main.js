"use strict";

const firebaseConfig = {
  apiKey: "AIzaSyBw3ndXniA_ll_7bUiC_0V55bUlOV5Rrb4",
  authDomain: "fir-chat-app-16e06.firebaseapp.com",
  projectId: "fir-chat-app-16e06",
  storageBucket: "fir-chat-app-16e06.appspot.com",
  messagingSenderId: "60669129812",
  appId: "1:60669129812:web:d291bc6a7c30f6ed1569c1",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const collection = db.collection("messages");

collection
  .add({
    message: "test",
  })
  .then((doc) => {
    console.log(`${doc.id} added`);
  })
  .catch((error) => {
    console.log(error);
  });
