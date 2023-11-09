import { Link } from 'react-router-dom'

import mascot from '../assets/mascot.png'
import mascotDesktop from '../assets/mascot_desktop.png'
import glitter from '../assets/glitter.png'

import AccentCard from '../components/AccentCard'
import Footer from '../components/Footer'

import './Home.scss'

const HomePage = () => {
  return (
    <section className='home-page'>
      <img className='heading-img' src={glitter} alt="glitter" />
      <section className='main-content'>
        <section className='hero'>
          <img className='hero-mascot' src={mascot} alt="glitter mascot" />
          <img className='hero-mascot-desktop' src={mascotDesktop} alt="glitter mascot" />
          <h1 className='hero-title'>¡brillemos juntos!</h1>
          <p className='hero-text'>
            Crea experiencias que te inspiren, conecta con otros artistas y celebra lo que eres 
          </p>
        </section>
        <section className='event-info' >
          <h2 className='event-info-next-event'>próximo evento</h2>
          <AccentCard styles={{ fontWeight: 400 }}>
            <span>Viernes 1 y sábado 2 de diciembre</span>
            <span>10:00 a 20:00</span>
            <span>Galería del CBA, calle Sucre #346</span>
          </AccentCard>
          <Link className='landing-primary-button' to='/login'>¡Quiero participar!</Link>
        </section>
      </section>
      <Footer />
    </section>
  )
}

export default HomePage
