import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
  language: string;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: "FREQUENTLY ASKED QUESTIONS",
      subtitle:
        "Find answers to the most common questions about immigration to Denmark",
      faqs: [
        {
          question: "How long does the family reunification process take?",
          answer:
            "The processing time for family reunification applications typically ranges from 6 to 12 months, depending on the complexity of your case and current processing times at the Danish Immigration Service. We provide regular updates throughout the process.",
        },
        {
          question:
            "What documents do I need for a family reunification application?",
          answer:
            "Required documents include passport copies, marriage certificate, proof of income, housing documentation, language test results, and various other supporting documents. We provide a comprehensive checklist tailored to your specific situation.",
        },
        {
          question:
            "Can I work in Denmark while my application is being processed?",
          answer:
            "This depends on your current legal status in Denmark. If you're already in Denmark on a valid visa or permit, you may be able to work under certain conditions. We'll advise you on your specific situation during consultation.",
        },
        {
          question:
            "What are the income requirements for family reunification?",
          answer:
            "The Danish sponsor must meet specific income requirements, which vary depending on the type of application and family situation. Current requirements are updated regularly, and we ensure you have the most current information.",
        },
        {
          question:
            "Do I need to speak Danish to apply for family reunification?",
          answer:
            "Danish language requirements vary depending on your situation and the type of application. Some applicants may need to pass a Danish language test, while others may be exempt. We'll assess your specific requirements.",
        },
        {
          question: "What happens if my application is rejected?",
          answer:
            "If your application is rejected, you typically have the right to appeal the decision. We analyze the rejection reasons and advise on the best course of action, whether that's appealing or reapplying with additional documentation.",
        },
      ],
    },
    da: {
      title: "OFTE STILLEDE SPØRGSMÅL",
      subtitle:
        "Find svar på de mest almindelige spørgsmål om immigration til Danmark",
      faqs: [
        {
          question: "Hvor lang tid tager familiesammenføringsprocessen?",
          answer:
            "Behandlingstiden for familiesammenføringsansøgninger varierer typisk fra 6 til 12 måneder, afhængigt af kompleksiteten af din sag og aktuelle behandlingstider hos Udlændingestyrelsen. Vi giver regelmæssige opdateringer gennem hele processen.",
        },
        {
          question:
            "Hvilke dokumenter har jeg brug for til en familiesammenføringsansøgning?",
          answer:
            "Påkrævede dokumenter inkluderer paskopier, vielsesattest, indkomstbevis, boligdokumentation, sprogprøveresultater og forskellige andre støttedokumenter. Vi leverer en omfattende tjekliste skræddersyet til din specifikke situation.",
        },
        {
          question: "Kan jeg arbejde i Danmark, mens min ansøgning behandles?",
          answer:
            "Dette afhænger af din nuværende juridiske status i Danmark. Hvis du allerede er i Danmark på et gyldigt visa eller tilladelse, kan du muligvis arbejde under visse betingelser. Vi rådgiver dig om din specifikke situation under konsultation.",
        },
        {
          question: "Hvad er indkomstkravene for familiesammenføring?",
          answer:
            "Den danske sponsor skal opfylde specifikke indkomstkrav, som varierer afhængigt af ansøgningstypen og familiesituationen. Nuværende krav opdateres regelmæssigt, og vi sikrer, at du har de mest aktuelle oplysninger.",
        },
        {
          question:
            "Skal jeg kunne tale dansk for at ansøge om familiesammenføring?",
          answer:
            "Danske sprogkrav varierer afhængigt af din situation og ansøgningstypen. Nogle ansøgere skal muligvis bestå en dansk sprogprøve, mens andre kan være fritaget. Vi vurderer dine specifikke krav.",
        },
        {
          question: "Hvad sker der, hvis min ansøgning bliver afvist?",
          answer:
            "Hvis din ansøgning afvises, har du typisk ret til at anke afgørelsen. Vi analyserer afvisningsårsagerne og rådgiver om den bedste fremgangsmåde, hvad enten det er at anke eller genansøge med yderligere dokumentation.",
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
            <h2 className="relative inline-block text-5xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 px-2">
          {t.faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-all duration-300"
                >
                  <h3 className="flex-1 text-lg font-semibold text-gray-800 leading-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white" />
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
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
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
