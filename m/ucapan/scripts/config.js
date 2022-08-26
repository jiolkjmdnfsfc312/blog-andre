const firebaseConfig = {
  apiKey: "AIzaSyCjC-USwu7ZHeq6go-Ib7SeTO_smsThV74",
  authDomain: "blabz-app.firebaseapp.com",
  databaseURL: "https://blabz-app-default-rtdb.firebaseio.com",
  projectId: "blabz-app",
  storageBucket: "blabz-app.appspot.com",
  messagingSenderId: "187903251501",
  appId: "1:187903251501:web:c630f4a6ba9af865f2d4a4",
  measurementId: "G-KBG57QHP36"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();