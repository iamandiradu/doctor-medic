import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock, faUserMd, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Appointment submitted:', formData);
    alert('Programarea a fost înregistrată! Vă vom contacta pentru confirmare.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="appointment-content">
          <div className="appointment-info">
            <h2>Programează o Consultație</h2>
            <p>
              Căutăm să facem fiecare vizită la dentist o experiență pozitivă și relaxantă.
              Programați o consultație astăzi și vom oferi copilului dumneavoastră cea mai bună îngrijire dentară.
            </p>
            
            <div className="info-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FontAwesomeIcon icon={faUserMd} />
                </div>
                <div className="benefit-content">
                  <h4>Medici cu Experiență</h4>
                  <p>Dentisti calificați specializați în îngrijirea copiilor.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="benefit-content">
                  <h4>Program Flexibil</h4>
                  <p>Opțiuni de programare de luni până sâmbătă.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="benefit-content">
                  <h4>Confirmare Rapidă</h4>
                  <p>Confirmare telefonică în maxim 24 de ore.</p>
                </div>
              </div>
            </div>
            
            <div className="emergency-info">
              <h4>Urgențe Dentare</h4>
              <p>Pentru urgențe, vă rugăm să sunați direct la:</p>
              <div className="emergency-phone">
                <FontAwesomeIcon icon={faPhone} /> +40 726 123 456
              </div>
            </div>
          </div>
          
          <div className="appointment-form-container">
            <div className="appointment-header">
              <FontAwesomeIcon icon={faCalendarCheck} />
              <h3>Formular de Programare</h3>
            </div>
            
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nume Complet</label>
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
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Data Preferată</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Ora Preferată</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selectați ora</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Serviciu Dorit</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selectați serviciul</option>
                  <option value="consult">Consultație Inițială</option>
                  <option value="curatare">Curățare Dentară</option>
                  <option value="preventie">Tratament Preventiv</option>
                  <option value="educatie">Educație Dentară</option>
                  <option value="urgenta">Urgență Dentară</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Detalii Suplimentare</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="button primary">
                <FontAwesomeIcon icon={faCalendarCheck} /> Programează Acum
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment; 