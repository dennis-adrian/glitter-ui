import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.png'
import SignInButton from '../components/authentication/SignInButton'
import SignUpButton from '../components/authentication/SignUpButton'
import ErrorAlert from '../components/shared/ErrorAlert'

const LoginPage = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const { isLoggedIn } = useSelector((state: RootState) => state.currentUser)

  if (isLoggedIn) navigate('/user_profile')

  return (
    <div className='flex items-center justify-center h-screen flex-col'>
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