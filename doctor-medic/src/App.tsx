import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Appointment from './components/sections/Appointment';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
