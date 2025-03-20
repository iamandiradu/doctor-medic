import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Mulțumim pentru mesaj! Vă vom contacta în curând.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactați-ne</h2>
          <p>Suntem aici pentru a răspunde întrebărilor dumneavoastră și a programa vizite</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Informații de Contact</h3>
            <p>Dacă aveți întrebări sau doriți să programați o consultație, nu ezitați să ne contactați.</p>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h4>Telefon</h4>
                <p>+40 726 123 456</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4>Email</h4>
                <p>contact@paulaCheslerean.ro</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h4>Adresă</h4>
                <p>Strada Medicilor nr. 15, București</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <h4>Program</h4>
                <p>Luni - Vineri: 9:00 - 17:00</p>
                <p>Sâmbătă: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Trimiteți-ne un mesaj</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nume și Prenume</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} /> Trimite Mesaj
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <h3>Locația Noastră</h3>
          <div className="map-placeholder">
            <img src="images/map-placeholder.svg" alt="Locația cabinetului" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 