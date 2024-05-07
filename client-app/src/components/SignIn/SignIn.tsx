import { SignInButton } from '@clerk/clerk-react'
// import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h1>Sign in with this button</h1>
      <SignInButton mode='modal' forceRedirectUrl="/api"/>
    </div>
  )
}

export default SignIn
