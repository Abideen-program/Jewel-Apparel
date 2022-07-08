import {useState} from 'react'
const SignUp = () => {

    return(
        <div>
            <h2>Sign up with your eamil and password</h2>
            <form onSubmit={()=> {}}>
                <label>Display Name</label>
                <input type="text" required />

                <label>Email</label>
                <input type="text" required />

                <label>Password</label>
                <input type="text" required />

                <label>Confirm password</label>
                <input type="text" required />
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp