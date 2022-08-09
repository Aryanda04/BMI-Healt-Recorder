import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
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
// console.log(auth);
// const userId = auth.currentUser.uid;
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
// const writeUserData = (name, email, imageUrl, address, e) => {
//   e.preventDefault();
//   // const user = auth.currentUser;
//   // const userId = user.uid;
//   // console.log(user);
//   console.log(db);
//   const db = getDatabase();
//   set(ref(db, "/puskesmas/users/" + userId), {
//     name: name,
//     email: email,
//     address: address,
//     profile_picture: imageUrl,
//   });
// };

// const dbRef = ref(getDatabase());
// get(child(dbRef, `/puskesmas/users/` + userId))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const starCountRef = ref(db, "/puskesmas/users" + userId);
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
// db.ref("data").on("value", (snap) => {
//   console.log(snap.val());
// });
// ref = db.ref("users/ada");
// ref.once("value").then(function (snapshot) {
//   var data = snapshot.child({ userId }).val(); // {first:"Ada",last:"Lovelace"}
//   console.log(data);
// });

export {
  auth,
  db,
  ref,
  set,
  // dbRef,
  logInWithEmailAndPassword,
  logout,
  // writeUserData,
};
