import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, 
  faBrush, 
  faGraduationCap, 
  faCalendarCheck, 
  faShieldAlt, 
  faSmile 
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: faTooth,
      title: "Consultații Pediatrice",
      description: "Examinări delicate pentru copii de toate vârstele într-un mediu prietenos și sigur."
    },
    {
      id: 2,
      icon: faBrush,
      title: "Curățări Dentare Blânde",
      description: "Proceduri de curățare adaptate pentru dinți de lapte și permanenți, făcute cu blândețe."
    },
    {
      id: 3,
      icon: faGraduationCap,
      title: "Educație Preventivă",
      description: "Învățăm copiii tehnici corecte de periaj și obiceiuri sănătoase pentru o igienă orală optimă."
    },
    {
      id: 4,
      icon: faCalendarCheck,
      title: "Îngrijire Programată",
      description: "Planuri personalizate de tratament și monitorizare pentru dezvoltarea sănătoasă a dinților."
    },
    {
      id: 5,
      icon: faShieldAlt,
      title: "Prevenție și Protecție",
      description: "Tratamente preventive cu fluor și sigilări pentru a proteja dinții copiilor de carii."
    },
    {
      id: 6,
      icon: faSmile,
      title: "Tratamente Prietenoase",
      description: "Abordare fără stres pentru tratamente dentare, adaptate nevoilor și sensibilităților copiilor."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Serviciile Noastre</h2>
          <p>Îngrijire dentară de calitate adaptată special pentru copii</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Aveți întrebări despre serviciile noastre?</h3>
          <p>Suntem aici pentru a vă ajuta cu informații și programări.</p>
          <a href="#contact" className="button primary">Contactați-ne</a>
        </div>
      </div>
    </section>
  );
};

export default Services; 