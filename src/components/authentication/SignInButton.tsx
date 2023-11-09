import Button from '../Button'
import { signInWithGoogle } from './helpers/auth_helper'

const SignInButton = () => {
  return (
    <Button onClick={() => signInWithGoogle()}>Crea tu cuenta</Button>
  )
}

export default SignInButton