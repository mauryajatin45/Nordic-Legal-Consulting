// Hero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  language: "en" | "da";
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      titleTop: "We help families reunite —",
      titleBottom: "beyond borders",
      paragraph:
        "We’re here to make sure you can be with the ones you love. At Nordic Legal Consulting, we guide you with care through family reunification and visa processes, so bringing your family together becomes easier.",
      cta: "Free consultation",
      badges: [
        { text: "Expertise in Schengen Visas", image: "/1.png" },
        { text: "Expertise in EU regulations", image: "/2.png" },
      ],
      subCta: "Book a free 30-minute consultation with our legal experts.",
    },
    da: {
      titleTop: "Vi genforener familier –",
      titleBottom: "på tværs af grænser",
      paragraph:
        "Vi kæmper for, at du kan være sammen med dem, du elsker. Hos Nordic Legal Consulting guider vi dig trygt gennem familiesammenføring og visumprocesser, så vejen til at genforene din familie bliver lettere.",
      cta: "Gratis konsultation",
      badges: [
        { text: "Ekspertise i Schengen visum", image: "/1.png" },
        { text: "Ekspertise i EU-regler", image: "/2.png" },
      ],
      subCta: "Book en gratis 30-minutters konsultation med vores eksperter.",
    },
  };

  const t = content[language];

  const keepDashWithPrevious = (str: string) =>
    str.replace(/ (?=[–—-])/g, "\u00A0");

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center flex items-center scroll-mt-24"
      style={{
        backgroundImage: "url('/New_Hero_image.png')",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Hero"
    >
      {/* subtle overlay (tint) */}
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left column: text */}
          <div className="lg:col-span-8 xl:col-span-7 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block">{keepDashWithPrevious(t.titleTop)}</span>
              <span className="block md:whitespace-nowrap">
                {t.titleBottom}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl sm:text-xl text-white/90">
              {t.paragraph}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 border-2 border-white rounded-full px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
                aria-label={t.cta}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* badges */}
            <div className="mt-8 flex flex-col gap-3">
              {t.badges.map((badge, i) => (
                <BadgeIcon key={i} text={badge.text} image={badge.image} />
              ))}
            </div>
          </div>

          {/* Right side empty for hero image */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6"></div>
        </div>
      </div>
    </section>
  );
};

const BadgeIcon: React.FC<{ text: string; image: string }> = ({
  text,
  image,
}) => {
  return (
    <div className="flex items-center gap-3 bg-white/8 rounded-lg px-2 py-0 max-w-md">
      <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );
};

export default Hero;
