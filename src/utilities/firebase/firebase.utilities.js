import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBjqPk8Dk2EMDfYiBVov6AQjd-swwaADuU",
  authDomain: "jewel-clothing-line.firebaseapp.com",
  projectId: "jewel-clothing-line",
  storageBucket: "jewel-clothing-line.appspot.com",
  messagingSenderId: "438105889005",
  appId: "1:438105889005:web:db15732b7c33604fc254e4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => {
  return  signInWithPopup(auth, provider)
}