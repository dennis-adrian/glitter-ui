import Button from '../components/Button'
import { signInWithGoogle } from '../helpers/auth_helper'

import mascot from '../assets/mascot.png'
import glitter from '../assets/glitter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

import AccentCard from '../components/AccentCard'

import './Home.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

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
        <div className='social-media'>
          <a href='https://instagram.com/glitter.bo'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href='#' referrerPolicy='no-referrer' target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="mailto:glitter.festival.creativo@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage