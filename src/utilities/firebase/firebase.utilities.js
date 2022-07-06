import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const UserSnapshot = await getDoc(userDocRef)
  console.log(UserSnapshot)
  console.log(UserSnapshot.exists())

  if(!UserSnapshot.exists()) {

    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } 
    
    catch(error) {
      console.log('there was an error in getting the users document', error)
    }

  }
  return userDocRef
} 