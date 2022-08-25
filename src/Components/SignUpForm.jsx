import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const [isSuccess, setIsSuccess] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setIsSuccess("Password and Confirm Password is not match")

            setTimeout(() => {
                setIsSuccess('')
            }, 3000)
            return
        }

        try {
            // Create user
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            setIsSuccess("Success")
            setTimeout(() => {
                setIsSuccess('')
            }, 3000)

            setFormFields(defaultFormFields)

            //add to document

        } catch (error) {
            setIsSuccess("User creation encountered an error", error)
            setTimeout(() => {
                setIsSuccess('')
            }, 3000)
        }


    }
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div className='mx-auto my-10 w-2/3 bg-slate-100 p-5 rounded-xl shadow shadow-slate-300'>
            <h1 className='text-3xl font-medium uppercase text-center'>Register</h1>
            <p className="text-slate-500 text-center">Hi, Welcome back 👋</p>

            <form onSubmit={handleSubmit} className='my-10 w-2/3 mx-auto'>
                <div className='flex flex-col space-y-5'>
                    <label>
                        <p className='font-medium text-slate-700 pb-2'>
                            Name
                        </p>
                        <input name='displayName'
                            onChange={handleChange}
                            value={displayName}
                            type='text'

                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder="Enter your name" />
                    </label>
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
                    <label>
                        <p className='font-medium text-slate-700 pb-2'>
                            Confirm Password
                        </p>
                        <input name='confirmPassword'
                            onChange={handleChange}
                            value={confirmPassword}
                            type='password'

                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder="Enter your password" />
                    </label>
                    <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Register</span>
                    </button>
                </div>
            </form>
            <div>
                {(isSuccess !== '' && isSuccess !== "Success") && (
                    <div className="alert alert-error shadow-lg ">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{isSuccess}</span>
                        </div>
                    </div>
                )}
                {isSuccess === "Success" && (
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{isSuccess}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
