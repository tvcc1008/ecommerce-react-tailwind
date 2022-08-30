import React, { useState } from 'react'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils'
import { Link, useNavigate } from 'react-router-dom'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const history = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const logInGoogleUser = async () => {
        await signInWithGooglePopup()

        // setCurrentUser(user);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            setFormFields(defaultFormFields)
            // setCurrentUser(user);
            // history('/')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='mx-auto my-10 w-2/3 bg-slate-100 p-5 rounded-xl shadow shadow-slate-300'>
            <h1 className='text-3xl font-medium uppercase text-center'>Login</h1>
            <p className="text-slate-500 text-center">Hi, Welcome back 👋</p>

            <form onSubmit={handleSubmit} className='my-10 w-2/3 mx-auto'>
                <div className='flex flex-col space-y-5'>
                    <label>
                        <p className='font-medium text-slate-700 pb-2'>
                            Email
                        </p>
                        <input name='email'
                            onChange={handleChange}
                            value={email}
                            type='email'

                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder="Enter your email" />
                    </label>
                    <label>
                        <p className='font-medium text-slate-700 pb-2'>
                            Password
                        </p>
                        <input name='password'
                            onChange={handleChange}
                            value={password}
                            type='password'

                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder="Enter your password" />
                    </label>
                    <div className="flex flex-row justify-between">
                        <div>
                            <label>
                                <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                                Remember me
                            </label>
                        </div>
                        <div>
                            <Link to='/auth' className="font-medium text-indigo-600">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className='my-5 flex space-x-3 justify-center'>
                        <button type='submit' className="btn gap-2 btn-outline btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Login</span>
                        </button>
                        <button
                            type='buton'
                            onClick={logInGoogleUser}
                            className='btn gap-2 btn-outline btn-ghost '>
                            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignInForm