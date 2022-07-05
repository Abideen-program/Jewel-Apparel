import { signInWithGooglePopup } from '../../utilities/firebase/firebase.utilities'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }
    return (
        <div>
            <h1>This is the sign up page</h1>
            <button onClick={logGoogleUser}>Sign up with Google</button>
        </div>
    )
}

export default SignIn