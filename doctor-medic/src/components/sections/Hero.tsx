import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content container">
        <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
          <h1>
            Stomatologie pediatrică cu grijă și <span className="accent">zâmbet</span>
          </h1>
          <p>
            Suntem dedicați să oferim îngrijiri dentare de cea mai înaltă calitate pentru copilul tău,
            într-un mediu prietenos și lipsit de stres.
          </p>
          <div className="hero-buttons">
            <a href="#appointment" className="button primary">
              <FontAwesomeIcon icon={faCalendarCheck} /> Programează o consultație
            </a>
            <a href="#services" className="button secondary">
              Serviciile noastre
            </a>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'slide-in' : ''}`}>
          <img 
            src="images/portret.jpg" 
            alt="Copil la dentist zâmbind" 
          />
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 