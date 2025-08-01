import React from "react";
import { Target, Globe, Shield, Heart, Scale, CheckCircle } from "lucide-react";

interface TeamVisionProps {
  language: string;
}

const TeamVision: React.FC<TeamVisionProps> = ({ language }) => {
  const content = {
    en: {
      // Section 1
      visionTitle: "OUR TEAM'S VISION",
      visionText:
        "Our ambition is to be your trusted legal partner. We provide advice that is as practical as it is strategic — focusing on tangible solutions rather than mere theoretical assessments. Nordic Legal Consulting ensures you receive clear, effective, and forward-looking support for your legal challenges.",

      // Section 2
      expertsTitle: "MEET THE LEGAL EXPERTS BEHIND OUR ADVICE",
      expertsIntro:
        "At Nordic Legal Consulting, we are more than advisors – we are your dedicated legal team. Our experienced lawyers combine deep practical insight with strategic understanding in EU law, immigration law, compliance, and human rights.",

      sections: [
        {
          title: "Individual dedication and international expertise",
          description:
            "Each team member brings unique specialist knowledge and experience from complex national and European cases, ensuring advice that is both concrete and globally informed.",
          icon: Globe,
        },
        {
          title: "Professional depth and local grounding",
          description:
            "We unite expertise in international law with a solid understanding of Danish practice. This reflects Nordic Legal's commitment to thorough Nordic legal counsel that supports clients across borders.",
          icon: Scale,
        },
        {
          title: "Transparent and engaged counsel",
          description:
            "We believe strong results are created through openness and close dialogue. That's why we work closely with you every step of the way — with clear communication and a tailored strategy that ensures trust and transparency.",
          icon: Shield,
        },
      ],
    },
    da: {
      // Section 1
      visionTitle: "VISIONEN BAG TEAMET",
      visionText:
        "Vores ambition er at være din betroede juridiske partner. Vi leverer rådgivning, der er lige så praktisk som strategisk – med fokus på håndgribelige løsninger fremfor blot teoretiske vurderinger. Nordic Legal Consulting vil sikre, at du får klar, effektiv og fremadrettet støtte til dine juridiske udfordringer.",

      // Section 2
      expertsTitle: "MØD JURISTERNE BAG RÅDGIVNINGEN",
      expertsIntro:
        "Hos Nordic Legal Consulting er vi mere end rådgivere – vi er dit dedikerede juridiske team. Vores erfarne jurister kombinerer dyb praksisnær indsigt med strategisk forståelse inden for EU-ret og familiesammenføring.",

      sections: [
        {
          title: "Individuel indsats og internationale kompetencer",
          description:
            "Hvert teammedlem bidrager med unik specialeviden og erfaring fra komplekse nationale og europæiske sager. Det sikrer, at vi kan levere rådgivning, der både er konkret og globalt funderet.",
          icon: Globe,
        },
        {
          title: "Faglig tyngde og lokal forankring",
          description:
            "Vi forener ekspertise i international ret med en solid forståelse af dansk praksis. Det afspejler Nordic Legals dedikation til dyb nordisk rådgivning, som hjælper klienter på tværs af landegrænser.",
          icon: Scale,
        },
        {
          title: "Transparent og engageret rådgivning",
          description:
            "Vi tror på, at stærke resultater skabes gennem åbenhed og tæt dialog. Derfor arbejder vi tæt sammen med dig hele vejen – med klar kommunikation og en skræddersyet strategi, der sikrer tryghed og gennemsigtighed.",
          icon: Shield,
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="team-vision"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Team Vision */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Vision content */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t.visionTitle}
                  </span>
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                {t.visionText}
              </p>

              {/* Key points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === "da"
                      ? "Praktisk og strategisk rådgivning"
                      : "Practical and strategic advice"}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === "da"
                      ? "Håndgribelige løsninger"
                      : "Tangible solutions"}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === "da"
                      ? "Fremadrettet støtte"
                      : "Forward-looking support"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Vision image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/HandShake.webp"
                  alt="Legal team vision"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200/40 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Section 2: Legal Experts */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 lg:text-5xl font-bold text-gray-800 relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.expertsTitle}
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.expertsIntro}
            </p>
          </div>

          {/* Family image section */}
          <div className="mb-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/HappyFamily.jpeg"
                  alt="Happy family reunited"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-semibold text-center">
                    {language === "da"
                      ? "Vi hjælper familier med at genforenes"
                      : "We help families reunite"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise sections */}
          <div className="grid lg:grid-cols-3 gap-8">
            {t.sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 h-full">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center leading-tight">
                        {section.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-center flex-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {language === "da"
                    ? "Klar til at hjælpe din familie?"
                    : "Ready to help your family?"}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {language === "da"
                  ? "Kontakt os i dag for en gratis konsultation og få skræddersyet juridisk rådgivning til din sag."
                  : "Contact us today for a free consultation and receive tailored legal advice for your case."}
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {language === "da"
                  ? "Book Gratis Konsultation"
                  : "Book Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamVision;
