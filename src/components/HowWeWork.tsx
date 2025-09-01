import React from "react";
import {
  FileText,
  FolderOpen,
  CheckCircle,
  Send,
  ArrowRight,
} from "lucide-react";

interface HowWeWorkProps {
  language: string;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ language }) => {
  const content = {
    en: {
      title: "How we work",
      subtitle: "We help you safely through immigration – with solutions tailored to your needs",
      Btn: "Ready to get started?",
      steps: [
        {
          number: "01",
          title: "Review of the case with a lawyer",
          description:
            "We start by reviewing the case with you to assess whether you meet the conditions. With us, you always get an honest assessment.",
          icon: FileText,
          color: "from-blue-500 to-cyan-500",
        },
        {
          number: "02",
          title: "Case creation",
          description:
            "We will then create a case order ID. Help you pay the fee and book an appointment to take biometrics.",
          icon: FolderOpen,
          color: "from-purple-500 to-pink-500",
        },
        {
          number: "03",
          title: "Fills out application & documentation",
          description:
            "We help you collect the necessary documentation and fill out the application form. We will of course review and cross-check everything!",
          icon: CheckCircle,
          color: "from-green-500 to-emerald-500",
        },
        {
          number: "04",
          title: "Case sent to the Immigration Service",
          description:
            "Once we have ensured that the case is complete, we send the case with our cover letter to the Dansk Immigration Service. We will of course follow the case until the end.",
          icon: Send,
          color: "from-orange-500 to-red-500",
        },
      ],
    },
    da: {
      title: "Sådan arbejder vi",
      subtitle: "Sådan arbejder vi Vi guider dig trygt gennem immigrationsprocessen – med løsninger, der passer til dine behov",
      Btn: "Klar til at komme i gang?",
      steps: [
        {
          number: "01",
          title: "Gennemgang af sagen med en advokat",
          description:
            "Vi starter med at gennemgå sagen med dig for at vurdere, om du opfylder betingelserne. Hos os får du altid en ærlig vurdering.",
          icon: FileText,
          color: "from-blue-500 to-cyan-500",
        },
        {
          number: "02",
          title: "Sagsoprettelse",
          description:
            "Vi opretter derefter et sagsordre-ID. Hjælper dig med at betale gebyret og booker en aftale til at tage biometri.",
          icon: FolderOpen,
          color: "from-purple-500 to-pink-500",
        },
        {
          number: "03",
          title: "Udfylder ansøgning og dokumentation",
          description:
            "Vi hjælper dig med at indsamle den nødvendige dokumentation og udfylde ansøgningsformularen. Vi gennemgår og krydstjekker selvfølgelig alt!",
          icon: CheckCircle,
          color: "from-green-500 to-emerald-500",
        },
        {
          number: "04",
          title: "Sag sendt til Udlændingestyrelsen",
          description:
            "Når vi har sikret os, at sagen er komplet, sender vi sagen med vores følgebrev til Dansk Udlændingestyrelse. Vi følger selvfølgelig sagen til ende.",
          icon: Send,
          color: "from-orange-500 to-red-500",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4"></span> */}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop Layout - Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500  to-orange-500 rounded-full opacity-30"></div>

            <div className="grid grid-cols-4 gap-8">
              {t.steps.map((step, index) => {
                const IconComponent = step.icon;

                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="group relative">
                      <div
                        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl"
                        style={{
                          background: `linear-gradient(135deg, ${
                            step.color.split(" ")[1]
                          }, ${step.color.split(" ")[3]})`,
                        }}
                      ></div>

                      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105 min-h-[400px] flex flex-col">
                        {/* Step Number Circle */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-white font-bold text-sm">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Icon */}
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center">
                          <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                            {step.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Vertical Flow */}
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto">
            <div className="space-y-12">
              {t.steps.map((step, index) => {
                const IconComponent = step.icon;

                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="group relative">
                      {/* Background glow on hover */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl"
                        style={{
                          background: `linear-gradient(135deg, ${
                            step.color.split(" ")[1]
                          }, ${step.color.split(" ")[3]})`,
                        }}
                      ></div>

                      {/* Card Container */}
                      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                        <div className="flex items-start gap-4">
                          {/* Icon + Step Number */}
                          <div
                            className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex flex-col items-center justify-center shadow-lg flex-shrink-0`}
                          >
                            <IconComponent className="w-5 h-5 text-white mb-0.5" />
                            <span className="text-[11px] text-white font-semibold">
                              {step.number}
                            </span>
                          </div>

                          {/* Title + Description */}
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="/#contact">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span>{t.Btn}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
