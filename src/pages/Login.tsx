import logo from '../assets/logo.png'

const LoginPage = () => {
  return (
    <div className='container flex items-center justify-center h-screen flex-col'>
      <div className='avatar'>
        <div className='w-36 rounded-full m-8'>
          <img src={logo} alt='glitter logo' />
        </div>
      </div>
      <div>
        <button className='btn btn-block btn-primary'>Crear cuenta</button>
        <button className='btn btn-block btn-outline btn-secondary mt-2'>Iniciar sesión</button>
      </div>
    </div>
  )
}

export default LoginPage