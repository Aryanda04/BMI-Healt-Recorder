import firebase from 'firebase'



const firebaseConfig = {

  apiKey: "AIzaSyCWJilHx9MqZhUJ8r7e21Uj_cHY2dDv-XI",

  authDomain: "bmi-data-web.firebaseapp.com",

  databaseURL: "https://bmi-data-web-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "bmi-data-web",

  storageBucket: "bmi-data-web.appspot.com",

  messagingSenderId: "926972912994",

  appId: "1:926972912994:web:338baf189ee566d8ce383b",

  measurementId: "G-C5T7QDSVEP"

};


  
firebase.initializeApp(firebaseConfig);  // const db = firebase.firestore();
  const auth = firebase.auth()

export {auth};
export default firebase;