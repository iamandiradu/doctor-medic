import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <a href="#" className="footer-logo">
            <FontAwesomeIcon icon={faTooth} /> Dr. Paula Cheslerean
          </a>
          <p>
            Transformăm vizitele la dentist într-o experiență plăcută pentru copii și le aducem zâmbete pe fețe.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Link-uri Rapide</h3>
          <ul className="footer-links">
            <li className="footer-link"><a href="#home">Acasă</a></li>
            <li className="footer-link"><a href="#about">Despre</a></li>
            <li className="footer-link"><a href="#services">Servicii</a></li>
            <li className="footer-link"><a href="#testimonials">Testimoniale</a></li>
            <li className="footer-link"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Servicii</h3>
          <ul className="footer-links">
            <li className="footer-link"><a href="#services">Consultații Pediatrice</a></li>
            <li className="footer-link"><a href="#services">Curățări Blânde</a></li>
            <li className="footer-link"><a href="#services">Educație Preventivă</a></li>
            <li className="footer-link"><a href="#services">Îngrijire Programată</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Cabinet Stomatologic Dr. Paula Cheslerean. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer; 