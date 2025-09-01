import React from "react";
import { Heart, Scale, Plane, ArrowRight } from "lucide-react";
interface ServicesProps {
  language: string;
  onGetStarted: () => void; // Add this prop
}

const Services: React.FC<ServicesProps> = ({ language, onGetStarted }) => {
  const content = {
    en: {
      title: "Our services",
      subtitle:
        "We help you safely through the process – with solutions tailored to your needs",
      getStarted: "GET STARTED",
      services: [
        {
          title: "Family Reunification in Denmark",
          icon: Heart,
          features: [
            "Legal consultation and guidance",
            "Availability for questions throughout the process",
            "Assistance in completing the application form",
            "Submission of the application to the Danish Immigration Service",
            "Preparation of a supporting cover letter",
            "Ongoing follow-up until the case is concluded",
            "Assistance with CPR number registration",
          ],
        },
        {
          title: "Family Reunification under EU Law",
          icon: Scale,
          features: [
            "Visa legal consultation and guidance",
            "Availability for questions throughout the process",
            "Assistance in completing the application form",
            "Submission of the application to the relevant authorities",
            "Preparation of a supporting cover letter",
            "Ongoing follow-up until the case is concluded",
            "Assistance with national ID number (personnummer) registration",
          ],
        },
        {
          title: "Visa for Denmark / Sweden : EU Citizen",
          icon: Plane,
          features: [
            "Consultation, guidance, and legal advice",
            "Availability for questions throughout the process",
            "Assistance with completing the application form",
            "Submission of the application",
            "Preparation of a supporting cover letter",
            "Ongoing follow-up until the case is concluded",
          ],
        },
      ],
    },
    da: {
      title: "Vores services",
      subtitle:
        "Vi hjælper dig trygt gennem immigration – med løsninger tilpasset dine behov",
      getStarted: "KOM I GANG",
      services: [
        {
          title: "Familiesammenføring i Danmark",
          icon: Heart,
          features: [
            "Juridisk konsultation og vejledning",
            "Tilgængelighed for spørgsmål gennem hele processen",
            "Assistance med at udfylde ansøgningsformularen",
            "Indsendelse af ansøgningen til Dansk Udlændingestyrelse",
            "Udarbejdelse af et støttende følgebrev",
            "Løbende opfølgning indtil sagen er afsluttet",
            "Assistance med CPR-nummer registrering",
          ],
        },
        {
          title: "Familiesammenføring under EU-ret",
          icon: Scale,
          features: [
            "Visa juridisk konsultation og vejledning",
            "Tilgængelighed for spørgsmål gennem hele processen",
            "Assistance med at udfylde ansøgningsformularen",
            "Indsendelse af ansøgningen til relevante myndigheder",
            "Udarbejdelse af et støttende følgebrev",
            "Løbende opfølgning indtil sagen er afsluttet",
            "Assistance med nationalt ID-nummer (personnummer) registrering",
          ],
        },
        {
          title: "Visa til Danmark / Sverige : EU-borger",
          icon: Plane,
          features: [
            "Konsultation, vejledning og juridisk rådgivning",
            "Tilgængelighed for spørgsmål gennem hele processen",
            "Assistance med at udfylde ansøgningsformularen",
            "Indsendelse af ansøgningen",
            "Udarbejdelse af et støttende følgebrev",
            "Løbende opfølgning indtil sagen er afsluttet",
          ],
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index === 0
                        ? "#3b82f6, #8b5cf6"
                        : index === 1
                        ? "#8b5cf6, #ec4899"
                        : "#10b981, #06b6d4"
                    })`,
                  }}
                ></div>

                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden">
                  <div className="p-8">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto transition-all duration-300 ${
                        index === 0
                          ? "bg-blue-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500"
                          : index === 1
                          ? "bg-purple-100 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                          : "bg-green-100 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 transition-colors duration-300 ${
                          index === 0
                            ? "text-blue-600 group-hover:text-white"
                            : index === 1
                            ? "text-purple-600 group-hover:text-white"
                            : "text-green-600 group-hover:text-white"
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                ? "bg-purple-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={onGetStarted} // Call onGetStarted function on button click
                      className={`w-full text-white py-3 px-6 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group ${
                        index === 0
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                          : index === 1
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      }`}
                    >
                      {t.getStarted}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
