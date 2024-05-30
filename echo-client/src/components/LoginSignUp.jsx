import LoginForm from './forms/LoginForm'
import SignUpForm from './forms/SignUpForm'
import { useState } from 'react'

const LogInSignUp = () => {
    const [ view, setView ] = useState('login')

    return (
        <>
            {
            view === 'login' 
                ? 
                <section>
                    <LoginForm />
                    <p>Not a member?</p>
                    <button onClick={() => { setView('signup') }}>Sign Up</button>
                </section>
                : 
                <section>
                     <SignUpForm />
                    <p>Already a member?</p>
                    <button onClick={() => { setView('login') }}>Log In</button>
                </section>
            }
        </>
    )
}

export default LogInSignUp
