import mascot from '../assets/mascot.png'
import './Home.scss'

const HomePage = () => {
  return (
    <>
      <section className='hero'>
        <h1 className='hero-title'>Bienvenido a Glitter</h1>
        <img className='hero-img' src={mascot} alt="glitter mascot" />
      </section>
    </>
  )
}

export default HomePage