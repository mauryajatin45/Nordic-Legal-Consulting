import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      titleLines: ["We help families reunite —", "beyond borders"],
      paragraph:
        "We’re here to make sure you can be with the ones you love. At Nordic Legal Consulting, we guide you with care through family reunification and visa processes, so bringing your family together becomes easier.",
      cta: "Free consultation",
      badges: ["Expertise in Schengen Visas", "Expertise in EU regulations"],
    },
    da: {
      titleLines: ["Vi hjælper familier genforenes —", "på tværs af grænser"],
      paragraph:
        "Vi hjælper dig med at være sammen med dine kære. Nordic Legal Consulting guider dig gennem familiesammenføring og visa-processer med omhu, så det bliver lettere at bringe din familie sammen.",
      cta: "Gratis konsultation",
      badges: ["Ekspertise i Schengen-visum", "Ekspertise i EU-regler"],
    },
  };

  const t = content[language === "en" ? "en" : "da"];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/New_Hero_image.png')",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Hero"
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left column: big copy */}
          <div className="lg:col-span-7 xl:col-span-6 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block">{t.titleLines[0]}</span>
              <span className="block">{t.titleLines[1]}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/90">
              {t.paragraph}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* outlined pill CTA */}
              <a
                href="/contact"
                className="inline-flex items-center gap-3 border-2 border-white rounded-full px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
                aria-label={t.cta}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* subtle secondary CTA or note */}
              <p className="text-sm text-white/80 max-w-xl">
                {language === "en"
                  ? "Book a free 30-minute consultation with our legal experts."
                  : "Book en gratis 30-minutters konsultation med vores eksperter."}
              </p>
            </div>

            {/* badges */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BadgeIcon text={t.badges[0]} />
              <BadgeIcon text={t.badges[1]} />
            </div>
          </div>

          {/* right safe area - intentionally left empty so background image (person) shows */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6"></div>
        </div>
      </div>
    </section>
  );
};

/* Small white badge used under the CTA (icon + text) */
const BadgeIcon: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 bg-white/8 border border-white/20 rounded-lg px-4 py-2 max-w-md">
      {/* small shield icon */}
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 2l6 3v5c0 5-3.5 9.7-6 11-2.5-1.3-6-6-6-11V5l6-3z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        <path
          d="M9.5 12.5l1.8 1.8 3.7-3.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-sm text-white/90">{text}</span>
    </div>
  );
};

export default Hero;
