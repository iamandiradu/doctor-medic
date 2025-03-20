import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <FontAwesomeIcon icon={faTooth} />
          <span>Dr. Paula Cheslerean</span>
        </a>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link">Acasă</a></li>
            <li><a href="#about" className="nav-link">Despre</a></li>
            <li><a href="#services" className="nav-link">Servicii</a></li>
            <li><a href="#testimonials" className="nav-link">Testimoniale</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 