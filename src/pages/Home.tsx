import Button from '../components/Button'
import { signInWithGoogle } from '../helpers/auth_helper'

import mascot from '../assets/mascot.png'
import glitter from '../assets/glitter.png'

import AccentCard from '../components/AccentCard'

import Footer from '../components/Footer'
import './Home.scss'

const HomePage = () => {
  return (
    <>
      <section className='hero'>
        <img className='hero-heading' src={glitter} alt="glitter" />
        <img className='hero-mascot' src={mascot} alt="glitter mascot" />
        <h1 className='hero-title'>¡brillemos juntos!</h1>
        <h2 className='hero-subtitle'>próximo evento</h2>
        <AccentCard styles={{ fontWeight: 400, width: '70%' }}>
          <span>Viernes 1 y sábado 2 de diciembre</span>
          <span>10:00 a 20:00</span>
          <span>Galería del CBA, calle sucre</span>
        </AccentCard>
        <Button onClick={() => signInWithGoogle()}>Crea tu cuenta</Button>
        <p className='hero-text'>
          Crea experiencias que te inspiren, conecta con otros artistas y celebra lo que eres 
        </p>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
