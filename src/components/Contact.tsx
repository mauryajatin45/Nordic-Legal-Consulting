// Contact.tsx
import React, { forwardRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactProps {
  language: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(({ language }, ref) => {
  // Replace "mnnzqqbd" with your Formspree form ID if different
  const [state, handleSubmit] = useForm("mnnzqqbd");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    preferredLanguage: "dansk",
    purpose: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const content = {
    en: {
      title: "Contact us",
      formTitle: "Book gratis konsultation",
      fullName: "Full Name *",
      mobile: "Mobile Number *",
      preferredLang: "Preferred language",
      purpose: "Meeting Purpose",
      message: "Message (optional)",
      bookButton: "Book Now",
      bookButtonLoading: "Booking...",
      placeholders: {
        fullName: "John Doe",
        mobile: "+45 12 34 56 78",
        message: "Tell us about your situation...",
      },
      contactCards: {
        emailTitle: "Email Us",
        email: "info@nordiclegalconsulting.dk",
        emailNote: "We respond within 24 hours",
        phoneTitle: "Call Us",
        phone: "+45 70 20 30 40",
        phoneHours: "Mon-Fri 9:00-17:00 CET",
        visitTitle: "Visit Us",
        visitAddressLine1: "Nørregade 45, 2. sal",
        visitAddressLine2: "1165 København K, Danmark",
      },
      purposes: [
        "Family Reunification",
        "EU Law Consultation",
        "Visa Application",
        "General Consultation",
      ],
      success:
        "Thank you! We'll contact you shortly to confirm your appointment.",
    },
    da: {
      title: "Kontakt os",
      formTitle: "Book gratis konsultation",
      fullName: "Fulde Navn *",
      mobile: "Mobilnummer *",
      preferredLang: "Foretrukne Sprog",
      purpose: "Mødets Formål",
      message: "Besked (valgfri)",
      bookButton: "Book Nu",
      bookButtonLoading: "Booker...",
      placeholders: {
        fullName: "Dit fulde navn",
        mobile: "+45 12 34 56 78",
        message: "Fortæl os om din situation...",
      },
      contactCards: {
        emailTitle: "Email Os",
        email: "info@nordiclegalconsulting.dk",
        emailNote: "Vi svarer inden for 24 timer",
        phoneTitle: "Ring til Os",
        phone: "+45 70 20 30 40",
        phoneHours: "Man-Fre 9:00-17:00 CET",
        visitTitle: "Besøg Os",
        visitAddressLine1: "Nørregade 45, 2. sal",
        visitAddressLine2: "1165 København K, Danmark",
      },
      purposes: [
        "Familiesammenføring",
        "EU-ret konsultation",
        "Visa ansøgning",
        "Generel konsultation",
      ],
      success: "Tak! Vi kontakter dig snarest for at bekræfte din aftale.",
    },
  };

  const t = content[language === "da" ? "da" : "en"];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left cards column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Email Card */}
            <Card>
              <div className="flex items-start gap-4">
                <IconBox>
                  <Mail className="w-5 h-5 text-white" />
                </IconBox>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {t.contactCards.emailTitle}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t.contactCards.email}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t.contactCards.emailNote}
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card>
              <div className="flex items-start gap-4">
                <IconBox>
                  <Phone className="w-5 h-5 text-white" />
                </IconBox>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {t.contactCards.phoneTitle}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t.contactCards.phone}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t.contactCards.phoneHours}
                  </p>
                </div>
              </div>
            </Card>

            {/* Visit Card */}
            <Card>
              <div className="flex items-start gap-4">
                <IconBox>
                  <MapPin className="w-5 h-5 text-white" />
                </IconBox>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {t.contactCards.visitTitle}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t.contactCards.visitAddressLine1}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t.contactCards.visitAddressLine2}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t.formTitle}
              </h3>

              {state.succeeded ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-800 font-medium">{t.success}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label="Consultation form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.fullName}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.fullName}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                      <ValidationError
                        prefix="Full Name"
                        field="fullName"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.mobile}
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.mobile}
                        required
                        pattern="^\+?[0-9\s\-\(\)]{8,20}$"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                      <ValidationError
                        prefix="Mobile"
                        field="mobile"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Preferred Language */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.preferredLang}
                      </label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="dansk">Dansk</option>
                        <option value="english">English</option>
                      </select>
                    </div>

                    {/* Purpose */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.purpose}
                      </label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">
                          {language === "da"
                            ? "Vælg formål..."
                            : "Select purpose..."}
                        </option>
                        {t.purposes.map((p, i) => (
                          <option key={i} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <ValidationError
                        prefix="Purpose"
                        field="purpose"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder={t.placeholders.message}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  {/* Hidden form language field (useful if you want to know which lang was used) */}
                  <input type="hidden" name="formLanguage" value={language} />

                  {/* Form-level validation error display */}
                  {state.errors && state.errors.length > 0 && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md p-3">
                      {language === "da"
                        ? "Udfyld venligst alle påkrævede felter korrekt."
                        : "Please fill all required fields correctly."}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold ${
                      state.submitting
                        ? "opacity-70 cursor-not-allowed bg-gradient-to-r from-gray-500 to-gray-600"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    {state.submitting
                      ? language === "da"
                        ? t.bookButtonLoading
                        : t.bookButtonLoading
                      : language === "da"
                      ? t.bookButton
                      : t.bookButton}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;

/* ---------- Small helper components below (keeps markup clean) ---------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      {children}
    </div>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
      {children}
    </div>
  );
}
