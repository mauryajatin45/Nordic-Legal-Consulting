import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
  language: string;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: "Family Reunification FAQs – EU Rules",
      subtitle:
        "Find answers about eligibility, documents, timelines, and requirements.",
      faqs: [
        {
          question: "Who is eligible for family reunification in the EU?",
          answer: `Family reunification applies to:
• EU citizens who move to another EU member state.
• Non-EU nationals legally residing in an EU country.

 Example: A Danish citizen moving to Sweden can bring family under EU free movement rules.`,
        },
        {
          question: "Which family members can be reunited?",
          answer: `Typically eligible are:
• Spouse or registered partner.
• Children under 18 (sometimes under 21).
• Dependent parents or, in some cases, other dependent relatives.

 Example: If a Danish man moves to Sweden for work, his wife and their 17-year-old daughter may join him.`,
        },
        {
          question: "What requirements must the sponsor meet?",
          answer: `The sponsor must have:
• A stable residence (worker, student, self-employed, or sufficient funds).
• Adequate income/resources to support the family.
• Suitable housing.
• Valid health insurance.

 Example: A Danish student in Sweden must show she has sufficient funds and health insurance to support herself and her non-EU spouse.`,
        },
        {
          question: "What are the requirements for family members?",
          answer: `Family members must:
• Hold a valid passport.
• Provide proof of the family relationship (marriage certificate, birth certificate).
• In some countries: meet age requirements (e.g., Denmark’s 24-year rule).
• In some countries: fulfill integration requirements.

 Example: A Danish citizen in Sweden bringing her Moroccan husband must provide a marriage certificate and his valid passport. Sweden does not apply the 24-year rule.`,
        },
        {
          question:
            "How long can family members stay without a residence card?",
          answer: `Non-EU family members may stay for up to 3 months without a residence card. Some countries require them to register earlier.

 Example: A Danish citizen in Sweden brings her Brazilian husband. He can stay for 3 months without a card but must apply at Migrationsverket if staying longer.`,
        },
        {
          question: "What is the process for obtaining a residence card?",
          answer: `After 3 months, non-EU family members must:
• Register with local authorities.
• Submit passport, sponsor’s residence proof, and family documents.
• Receive a residence card confirming their right to stay.

 Example: A Danish worker in Sweden registers with Skatteverket. His non-EU wife applies for a residence card at Migrationsverket with their marriage certificate and proof of employment.`,
        },
        {
          question: "Are there special conditions in some EU countries?",
          answer: `Yes. Member states may impose additional conditions, such as:
• Age requirements (e.g., Denmark’s 24-year rule).
• Integration programs (e.g., language or cultural courses).

 Example: In Denmark, both spouses must be over 24. In Sweden, no such rule applies — a Danish citizen in Sweden can reunite with a younger spouse.`,
        },
        {
          question: "How do authorities verify the family relationship?",
          answer: `Authorities may require:
• Certified marriage/birth certificates.
• Proof of a genuine relationship (photos, joint finances, shared housing).
• Sometimes interviews to rule out marriages of convenience.

 Example: A Danish citizen in Sweden may need to provide photos, a rental contract, or joint bank account statements to prove the marriage is genuine.`,
        },
      ],
    },
    da: {
      title: "Familiesammenføring FAQ – EU-regler",
      subtitle:
        "Få svar om berettigelse, dokumenter, forløb og særlige krav efter EU regler.",
      faqs: [
        {
          question: "Hvem er berettiget til familiesammenføring i EU?",
          answer: `Familiesammenføring gælder for:
• EU-borgere, der flytter til et andet EU-land.
• Tredjelandsstatsborgere, der lovligt opholder sig i et EU-land.

 Eksempel: En dansk statsborger, der flytter til Sverige, kan tage sin familie med under EU’s regler om fri bevægelighed.`,
        },
        {
          question: "Hvilke familiemedlemmer kan genforenes?",
          answer: `Typisk er følgende familiemedlemmer berettigede:
• Ægtefælle eller registreret partner.
• Børn under 18 år (nogle gange under 21 år).
• Forsørgede forældre eller i visse tilfælde andre afhængige slægtninge.

 Eksempel: Hvis en dansk mand flytter til Sverige for at arbejde, kan hans kone og deres 17-årige datter slutte sig til ham.`,
        },
        {
          question: "Hvilke krav skal sponsoren opfylde?",
          answer: `Sponsoren skal have:
• En stabil bopæl (arbejdstager, studerende, selvstændig eller med tilstrækkelige midler).
• Tilstrækkelige økonomiske ressourcer til at forsørge familien.
• Egnet bolig.
• Gyldig sygeforsikring.

 Eksempel: En dansk studerende i Sverige skal kunne dokumentere, at hun har nok midler og sygeforsikring til at forsørge sig selv og sin ægtefælle fra et land uden for EU.`,
        },
        {
          question: "Hvilke krav gælder for familiemedlemmer?",
          answer: `Familiemedlemmer skal:
• Have et gyldigt pas.
• Dokumentere familieforholdet (ægteskabsattest, fødselsattest osv.).
• I nogle lande: opfylde alderkrav (f.eks. Danmarks 24-årsregel).
• I nogle lande: gennemføre integrationskrav.

 Eksempel: En dansk statsborger i Sverige, der ønsker familiesammenføring med sin marokkanske mand, skal fremvise ægteskabsattest og gyldigt pas. I Sverige gælder ingen 24-årsregel.`,
        },
        {
          question:
            "Hvor længe kan familiemedlemmer blive uden opholdskort?",
          answer: `Familiemedlemmer fra tredjelande kan blive i op til 3 måneder uden opholdskort. Nogle lande kræver dog, at de registrerer deres tilstedeværelse tidligere.

 Eksempel: En dansk statsborger i Sverige tager sin brasilianske mand med. Han kan blive i 3 måneder uden kort, men skal søge hos Migrationsverket, hvis han bliver længere.`,
        },
        {
          question: "Hvad er processen for at få et opholdskort?",
          answer: `Efter 3 måneder skal familiemedlemmer fra tredjelande:
• Registrere sig hos de lokale myndigheder.
• Indsende pas, dokumentation for sponsorens bopæl samt familiepapirer.
• Modtage et opholdskort, der bekræfter deres ret til ophold.

 Eksempel: En dansk arbejdstager i Sverige registrerer sig hos Skatteverket. Hans ikke-EU-kone søger om opholdskort hos Migrationsverket med ægteskabsattest og bevis for hans ansættelse.`,
        },
        {
          question: "Er der særlige regler i nogle EU-lande?",
          answer: `Ja. Medlemslandene kan tilføje særlige krav, som fx:
• Alderskrav (f.eks. Danmarks 24-årsregel).
• Integrationsprogrammer (fx sprog- eller kulturkurser).

 Eksempel: I Danmark skal begge ægtefæller være over 24 år. I Sverige gælder ingen sådan regel — en dansker i Sverige kan genforenes med en yngre ægtefælle.`,
        },
        {
          question: "Hvordan kontrollerer myndighederne familieforholdet?",
          answer: `Myndighederne kan kræve:
• Originale og legaliserede ægteskabs- og fødselsattester.
• Beviser for et reelt forhold (fotos, fælles økonomi, delt bopæl).
• I nogle tilfælde interviews for at udelukke proformaægteskaber.

 Eksempel: En dansk statsborger i Sverige kan blive bedt om at fremvise billeder, lejekontrakter eller kontoudtog for at dokumentere ægteskabets ægthed.`,
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Responsive FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-2">
          {t.faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 hover:bg-gray-50/50 transition-all duration-300"
                >
                  <h3 className="flex-1 text-base sm:text-lg font-semibold text-gray-800 text-left">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
