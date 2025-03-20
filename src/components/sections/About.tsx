import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMedal, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Despre Dr. Paula Cheslerean</h2>
          <p>Dentist pediatru cu experiență și pasiune pentru zâmbetele copiilor</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="images/doctor-portrait.svg" alt="Dr. Paula Cheslerean" />
            <div className="experience">
              <span className="experience-years">15+</span>
              <span className="experience-text">ani de experiență</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="intro">
              Bine ați venit la cabinetul nostru de stomatologie pediatrică! Sunt Dr. Paula Cheslerean, 
              medic stomatolog specializat în îngrijirea dentară a copiilor de toate vârstele.
            </p>
            
            <p>
              Cu peste 15 ani de experiență în domeniu, am dedicat cariera mea creării unei experiențe 
              pozitive și prietenoase pentru micii pacienți. Cred că fiecare vizită la dentist ar trebui 
              să fie o experiență lipsită de anxietate și plină de învățare pentru copii.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faUserMd} />
                </div>
                <div className="feature-content">
                  <h3>Educație și Specializare</h3>
                  <p>Doctorat în Stomatologie Pediatrică și formare continuă în cele mai recente tehnici.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faMedal} />
                </div>
                <div className="feature-content">
                  <h3>Abordare Blândă</h3>
                  <p>Specializată în tratarea pacienților anxioși și crearea unei experiențe pozitive.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faHandHoldingMedical} />
                </div>
                <div className="feature-content">
                  <h3>Îngrijire Personalizată</h3>
                  <p>Fiecare tratament este adaptat nevoilor specifice și vârstei copilului dumneavoastră.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 