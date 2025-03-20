import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Popescu",
      role: "Mamă a doi copii",
      quote: "Dr. Paula a avut o abordare incredibil de blândă cu fiica mea care se temea de dentist. Acum merge cu bucurie la control și înțelege importanța igienei dentare.",
      avatar: "images/testimonial-1.svg",
      rating: 5
    },
    {
      id: 2,
      name: "Alexandru Ionescu",
      role: "Tată a unui băiețel",
      quote: "Fiul meu a avut o experiență traumatizantă la un alt cabinet, dar Dr. Paula a știut exact cum să-l facă să se simtă în siguranță. Recomand cu căldură tuturor părinților!",
      avatar: "images/testimonial-2.svg",
      rating: 5
    },
    {
      id: 3,
      name: "Andreea Diaconu",
      role: "Mamă a trei copii",
      quote: "Apreciez enorm răbdarea și profesionalismul Dr. Paula. Copiii mei au învățat multe despre îngrijirea dentară și vizitele la cabinet sunt acum o plăcere.",
      avatar: "images/testimonial-3.svg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <FontAwesomeIcon 
        key={index} 
        icon={faStar} 
        className={index < rating ? 'star-filled' : 'star-empty'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce Spun Părinții</h2>
          <p>Experiențele familiilor care ne-au ales pentru îngrijirea dentară a copiilor lor</p>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-content">
            <div className="testimonial-icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="testimonial-quote">
              <p>{testimonials[currentIndex].quote}</p>
            </div>
            <div className="testimonial-rating">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
              </div>
              <div className="testimonial-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn prev" onClick={prevTestimonial}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentIndex ? 'active' : ''}`} 
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="control-btn next" onClick={nextTestimonial}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 