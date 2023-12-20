import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkaoF1804OWv-ZSYedPMMRI1llsjYsftg",
  authDomain: "community-app-93369.firebaseapp.com",
  projectId: "community-app-93369",
  storageBucket: "community-app-93369.appspot.com",
  messagingSenderId: "371911918522",
  appId: "1:371911918522:web:fda0de280bb70782369383",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
