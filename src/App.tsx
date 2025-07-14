import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Experts from './components/Experts';
import Services from './components/Services';
// import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [language, setLanguage] = useState<string>('da');
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Create a reference for the Contact section
  const contactRef = useRef<HTMLElement>(null);

  // Function to scroll to the Contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero language={language} />
          <Services language={language} onGetStarted={scrollToContact} />
          <HowWeWork language={language} />
          <Experts language={language} />
          {/* <Blog language={language} /> */}
          <FAQ language={language} />
          <Testimonials language={language} />
          <Contact ref={contactRef} language={language} /> {/* Pass ref to the Contact component */}
        </>
      )}
      
      {currentPage === 'about' && (
        <About language={language} />
      )}
      
      <Footer language={language} />
      <ChatBot language={language} />
    </div>
  );
}

export default App;
