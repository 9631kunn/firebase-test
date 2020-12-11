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
db.settings({
  timestampsInSnapshots: true,
});
const collection = db.collection("messages");

const d = document;

{
  const messages = d.querySelector("#messages");
  const message = d.querySelector("#message");
  const form = d.querySelector("form");

  // index
  collection
    .orderBy("createdAt")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const li = document.createElement("li");
        li.textContent = doc.data().message;
        messages.appendChild(li);
      });
    });

  // add
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const val = message.value.trim();
    if (val === "") return;

    const li = document.createElement("li");
    li.textContent = message.value;
    messages.appendChild(li);

    message.value = "";
    message.focus();

    collection
      .add({
        message: val,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        console.log(`${doc.id} added`);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  message.focus();
}
