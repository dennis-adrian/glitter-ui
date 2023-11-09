import { useState } from 'react'
import logo from '../assets/logo.png'
import SignInButton from '../components/authentication/SignInButton'
import SignUpButton from '../components/authentication/SignUpButton'
import ErrorAlert from '../components/shared/ErrorAlert'

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div className='container flex items-center justify-center h-screen flex-col'>
      <div className='avatar'>
        <div className='w-36 rounded-full m-8'>
          <img src={logo} alt='glitter logo' />
        </div>
      </div>
      <ErrorAlert message={errorMessage} onTimeUp={() => setErrorMessage('')} />
      <div>
        <SignUpButton onError={setErrorMessage} />
        <SignInButton onError={setErrorMessage} />
      </div>
    </div>
  )
}

export default LoginPage