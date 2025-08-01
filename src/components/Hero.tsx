// Enhanced Hero Section with Formspree integration
import React, { useState } from "react";
import { Calendar, Phone, User, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [state, handleSubmit] = useForm("xrblgglq");
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    preferredLanguage: "danish",
    purpose: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      bookButton: "Book now",
      bookButtonLoading: "Booking...",
      purposes: [
        "Family Reunification",
        "EU Law Consultation",
        "Visa Application",
        "General Consultation",
      ],
      successTitle: "Thank You!",
      successMessage: "We'll contact you shortly to confirm your appointment.",
      errorMessage: "Please fill all required fields correctly.",
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
      bookButton: "Book nu",
      bookButtonLoading: "Booker...",
      purposes: [
        "Familiesammenføring",
        "EU-ret konsultation",
        "Visa ansøgning",
        "Generel konsultation",
      ],
      successTitle: "Tak!",
      successMessage: "Vi kontakter dig snarest for at bekræfte din aftale.",
      errorMessage: "Udfyld venligst alle påkrævede felter korrekt.",
    },
  };

  const t = content[language as keyof typeof content];

  // Success state UI
  if (state.succeeded) {
    return (
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mx-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {t.successTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-8">{t.successMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            {language === "en" ? "Return to Form" : "Tilbage til formularen"}
          </button>
        </motion.div>
      </section>
    );
  }

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
          <p className=" !mt-0 text-sm sm:text-base md:text-lg">{t.cta}</p>
        </motion.div>

        <motion.div
          className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-white" />{" "}
            {t.formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" role="form">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-white flex items-center mb-1"
              >
                <User className="w-4 h-4 mr-2" /> {t.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
                placeholder={language === "en" ? "John Doe" : "Anders Andersen"}
                required
              />
              <ValidationError
                prefix="Full Name"
                field="fullName"
                errors={state.errors}
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="text-sm font-medium text-white flex items-center mb-1"
              >
                <Phone className="w-4 h-4 mr-2" /> {t.mobile}
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40 text-gray-900"
                placeholder={
                  language === "en" ? "+45 123 456 78" : "+45 123 456 78"
                }
                required
                pattern="^\+?[0-9\s\-\(\)]{8,20}$"
              />
              <ValidationError
                prefix="Mobile"
                field="mobile"
                errors={state.errors}
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="preferredLanguage"
                className="text-sm font-medium text-white flex items-center mb-1"
              >
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
              <label
                htmlFor="purpose"
                className="text-sm font-medium text-white mb-1"
              >
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
                <option value="">
                  {language === "en" ? "Select purpose..." : "Vælg formål..."}
                </option>
                {t.purposes.map((purpose, i) => (
                  <option key={i} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>
              <ValidationError
                prefix="Purpose"
                field="purpose"
                errors={state.errors}
                className="text-red-300 text-sm mt-1"
              />
            </div>

            {/* Hidden field for form language */}
            <input type="hidden" name="formLanguage" value={language} />

            {state.errors && (
              <div className="bg-red-500/20 border border-red-300/50 text-red-100 p-3 rounded-lg text-sm">
                {t.errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 ${
                state.submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}
            >
              {state.submitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t.bookButtonLoading}
                </div>
              ) : (
                t.bookButton
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
