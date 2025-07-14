import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Experts from './components/Experts';
import Services from './components/Services';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

import BlogFamilyReunification from './components/blogs/BlogFamilyReunification';
import BlogEUBlueCard from './components/blogs/BlogEUBlueCard';
import BlogImmigrationPoints from './components/blogs/BlogImmigrationPoints';

function App() {
  const [language, setLanguage] = useState<string>('da');

  // Create a reference for the Contact section
  const contactRef = useRef<HTMLElement>(null);

  // Function to scroll to the Contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar language={language} setLanguage={setLanguage} currentPage="" setCurrentPage={() => {}} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero language={language} />
                <Services language={language} onGetStarted={scrollToContact} />
                <HowWeWork language={language} />
                <Experts language={language} />
                <Blog language={language} />
                <FAQ language={language} />
                <Testimonials language={language} />
                <Contact ref={contactRef} language={language} />
              </>
            }
          />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/blogs/family-reunification" element={<BlogFamilyReunification language={language} />} />
          <Route path="/blogs/eu-blue-card" element={<BlogEUBlueCard language={language} />} />
          <Route path="/blogs/immigration-points" element={<BlogImmigrationPoints language={language} />} />
        </Routes>
        <Footer language={language} />
        <ChatBot language={language} />
      </div>
    </Router>
  );
}

export default App;
