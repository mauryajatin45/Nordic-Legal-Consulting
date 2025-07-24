import React, { forwardRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// Define the type for props
interface ContactProps {
  language: string;
}

// Use forwardRef to forward the ref to the root element of the component
const Contact = forwardRef<HTMLElement, ContactProps>(({ language }, ref) => {
  const [state, handleSubmit] = useForm("mnnzqqbd");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      title: "CONTACT US",
      subtitle: "Get in touch with our immigration experts today",
      formTitle: "Send us a message",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent successfully.",
      contactInfo: "Contact Information",
      addressTitle: "Address",
      address: "København, Danmark",
      contactDetails: {
        phoneTitle: "Phone",
        phone: "+45 50 47 60 37",
        emailTitle: "Email",
        email: "info@nordiclegalconsulting.dk",
        hoursTitle: "Office Hours",
        hours: "Mon - Fri: 9:00 - 17:00",
      },
      subjects: [
        "Family Reunification",
        "EU Blue Card",
        "Student Visa",
        "Work Permit",
        "General Inquiry",
      ],
    },
    da: {
      title: "KONTAKT OS",
      subtitle: "Kom i kontakt med vores immigrationseksperter i dag",
      formTitle: "Send os en besked",
      name: "Fulde Navn",
      email: "Email Adresse",
      phone: "Telefonnummer",
      subject: "Emne",
      message: "Besked",
      send: "Send Besked",
      sending: "Sender...",
      success: "Tak! Din besked er blevet sendt.",
      contactInfo: "Kontakt Information",
      addressTitle: "Adresse",
      address: "København, Danmark",
      contactDetails: {
        phoneTitle: "Telefon",
        phone: "+45 50 47 60 37",
        emailTitle: "E-mail",
        email: "info@nordiclegalconsulting.dk",
        hoursTitle: "Åbningstider",
        hours: "Man - Fre: 9:00 - 17:00",
      },
      subjects: [
        "Familiesammenføring",
        "EU Blåkort",
        "Studievisa",
        "Arbejdstilladelse",
        "Generel Forespørgsel",
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-xl max-h-fit">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t.formTitle}
            </h3>

            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-2xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-lg font-medium">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 backdrop-blur-sm"
                      required
                    >
                      <option value="" className="bg-white">
                        Select subject...
                      </option>
                      {t.subjects.map((subject, index) => (
                        <option
                          key={index}
                          value={subject}
                          className="bg-white"
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {state.submitting ? t.sending : t.send}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t.contactInfo}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {t.addressTitle}
                    </h4>
                    <p className="text-gray-600">{t.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{t.contactDetails.phoneTitle}</h4>
                    <p className="text-gray-600">{t.contactDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{t.contactDetails.emailTitle}</h4>
                    <p className="text-gray-600">{t.contactDetails.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {t.contactDetails.hoursTitle}
                    </h4>
                    <p className="text-gray-600">{t.contactDetails.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-4 shadow-xl">
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144871.42485428138!2d12.473097!3d55.6760968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sK%C3%B8benhavn%2C%20Danmark!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Copenhagen, Denmark Location"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
