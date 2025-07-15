// Enhanced Hero Section with better accessibility, responsive UI, animations, and form readiness
import React, { useState } from 'react';
import { Calendar, Phone, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    preferredLanguage: 'danish',
    purpose: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement API submission and success message
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const content = {
    en: {
      title: "Family Reunification",
      subtitle: "Reunite with loved ones in Denmark, Sweden, or Germany.",
      cta: "Book a free consultation with our legal experts today.",
      formTitle: "Free Consultation",
      fullName: "Full Name",
      mobile: "Mobile Number",
      preferredLang: "Preferred Language",
      purpose: "Meeting Purpose",
      bookButton: "Book Now",
      purposes: [
        "Family Reunification",
        "EU Law Consultation",
        "Visa Application",
        "General Consultation"
      ]
    },
    da: {
      title: "Familiesammenføring",
      subtitle: "Gensyn med dine kære i Danmark, Sverige eller Tyskland.",
      cta: "Book en gratis konsultation med vores juridiske eksperter.",
      formTitle: "Gratis Konsultation",
      fullName: "Fulde Navn",
      mobile: "Mobilnummer",
      preferredLang: "Foretrukne Sprog",
      purpose: "Mødets Formål",
      bookButton: "Book Nu",
      purposes: [
        "Familiesammenføring",
        "EU-ret konsultation",
        "Visa ansøgning",
        "Generel konsultation"
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Hero.webp')" }}
      role="region"
      aria-label="Hero with Consultation Form"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          className="text-white space-y-5 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r text-white">
              {t.title}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            {t.subtitle}
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            {t.cta}
          </p>
        </motion.div>

        <motion.div
          className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white" /> {t.formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" role="form">
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-white flex items-center mb-1">
                <User className="w-4 h-4 mr-2" /> {t.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="text-sm font-medium text-white flex items-center mb-1">
                <Phone className="w-4 h-4 mr-2" /> {t.mobile}
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
                placeholder="+45 123 456 78"
                required
              />
            </div>

            <div>
              <label htmlFor="preferredLanguage" className="text-sm font-medium text-white flex items-center mb-1">
                <Globe className="w-4 h-4 mr-2" /> {t.preferredLang}
              </label>
              <select
                id="preferredLanguage"
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
              >
                <option value="danish">Dansk</option>
                <option value="english">English</option>
              </select>
            </div>

            <div>
              <label htmlFor="purpose" className="text-sm font-medium text-white mb-1">
                {t.purpose}
              </label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
                required
              >
                <option value="">Select purpose...</option>
                {t.purposes.map((purpose, i) => (
                  <option key={i} value={purpose}>{purpose}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              {t.bookButton}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
