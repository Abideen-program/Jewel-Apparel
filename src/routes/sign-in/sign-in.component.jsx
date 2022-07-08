import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities"
import SignUp from "../../components/sign-up/sign-up.component";

const SignIn = () => {
    const logGoogleUser = async () =>  {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
        console.log(userDocRef)

    }

    return (
        <div>
            <h1>This is the sign up page</h1>
            <button onClick={logGoogleUser}>Sign up with Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn