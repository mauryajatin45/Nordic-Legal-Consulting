import React from "react";
import { Users, Scale, Heart, Award, Phone, Mail } from "lucide-react";

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: "Nordic Legal Consulting",
      subtitle: "WHO ARE WE?",
      sectionTitle: "Lawyers",
      aboutTitle: "About Nordic Legal Consulting",
      description:
        "At Nordic Legal Consulting, we are a team of experienced legal professionals specializing in family reunification and Schengen visas for spouses. We provide targeted and competent legal advice — no matter where in Denmark you are located.",
      description2:
        "We work digitally and efficiently, offering high-quality legal support at a fair price. Our focus is always on expertise, transparency, and personal service, ensuring that you feel secure throughout the entire process.",
      contactUs: "Contact us",
      stats: [
        { number: "500+", label: "Successful Cases" },
        { number: "8+", label: "Years Experience" },
        { number: "98%", label: "Success Rate" },
      ],
      values: [
        {
          icon: Scale,
          title: "Legal Expertise",
          description:
            "Specialized knowledge in family reunification and EU immigration law",
        },
        {
          icon: Heart,
          title: "Personal Service",
          description:
            "Dedicated support throughout your entire immigration journey",
        },
        {
          icon: Users,
          title: "Digital Efficiency",
          description: "Modern, streamlined processes for faster results",
        },
        {
          icon: Award,
          title: "Transparency",
          description:
            "Clear communication and honest assessments at every step",
        },
      ],
    },
    da: {
      title: "Nordic Legal Consulting",
      subtitle: "HVEM ER VI?",
      sectionTitle: "Advokater",
      aboutTitle: "Om Nordic Legal Consulting",
      description:
        "Hos Nordic Legal Consulting er vi et team af erfarne juridiske fagfolk, der specialiserer sig i familiesammenføring og Schengen-visa til ægtefæller. Vi leverer målrettet og kompetent juridisk rådgivning — uanset hvor i Danmark du befinder dig.",
      description2:
        "Vi arbejder digitalt og effektivt og tilbyder juridisk støtte af høj kvalitet til en fair pris. Vores fokus er altid på ekspertise, gennemsigtighed og personlig service, hvilket sikrer, at du føler dig tryg gennem hele processen.",
      contactUs: "Kontakt os",
      stats: [
        { number: "500+", label: "Succesfulde Sager" },
        { number: "8+", label: "Års Erfaring" },
        { number: "98%", label: "Succesrate" },
      ],
      values: [
        {
          icon: Scale,
          title: "Juridisk Ekspertise",
          description:
            "Specialiseret viden inden for familiesammenføring og EU-immigrationsret",
        },
        {
          icon: Heart,
          title: "Personlig Service",
          description: "Dedikeret støtte gennem hele din immigrationsrejse",
        },
        {
          icon: Users,
          title: "Digital Effektivitet",
          description:
            "Moderne, strømlinede processer for hurtigere resultater",
        },
        {
          icon: Award,
          title: "Gennemsigtighed",
          description: "Klar kommunikation og ærlige vurderinger på hvert trin",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl p-4 md:text-6xl font-bold text-gray-800 mb-4 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-2">{t.subtitle}</p>
          <p className="text-base sm:text-lg text-blue-600 font-semibold">
            {t.sectionTitle}
          </p>
        </div>

        {/* Stats Section - Updated for 3 stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-4xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Legal consultation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/40 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200/40 rounded-full blur-xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.description}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.description2}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+45 50 47 60 37</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@nordiclegalconsulting.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            {language === "en" ? "Our Values" : "Vores Værdier"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex flex-col h-full">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed flex-grow text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
