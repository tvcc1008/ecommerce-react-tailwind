import React from 'react'
import SignInForm from '../Components/SignInForm'
import { SignUpForm } from '../Components/SignUpForm'


const Auth = () => {


  return (
    <div className='flex w-full p-5'>
      <div className='grid h-auto flex-grow card bg-base-100 rounded-box place-items-center'>
        <SignInForm />
      </div>
      <div className='divider divider-horizontal'></div>
      <div className='grid h-auto flex-grow card bg-base-100 rounded-box place-items-center'>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Auth