import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import uniqid from "uniqid";

const firebaseConfig = {
  apiKey: "AIzaSyCWJilHx9MqZhUJ8r7e21Uj_cHY2dDv-XI",

  authDomain: "bmi-data-web.firebaseapp.com",

  databaseURL:
    "https://bmi-data-web-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "bmi-data-web",

  storageBucket: "bmi-data-web.appspot.com",

  messagingSenderId: "926972912994",

  appId: "1:926972912994:web:338baf189ee566d8ce383b",

  measurementId: "G-C5T7QDSVEP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const logInWithEmailAndPassword = async (email, password, e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
const writeUserData = (name, email, imageUrl, address, e) => {
  e.preventDefault();
  const userId = uniqid();
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    address: address,
    profile_picture: imageUrl,
  });
};

export { auth, db, ref, set, logInWithEmailAndPassword, logout, writeUserData };
