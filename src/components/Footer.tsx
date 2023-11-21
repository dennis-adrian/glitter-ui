import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://instagram.com/glitter.bo">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="#" referrerPolicy="no-referrer" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="mailto:glitter.festival.creativo@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
