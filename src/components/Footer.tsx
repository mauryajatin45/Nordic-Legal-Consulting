import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      description:
        "Expert immigration legal services for Denmark, Sweden, and Germany. We help families reunite and individuals achieve their immigration goals with professional guidance and support.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact Info",
      followUs: "Follow Us",
      copyright: "© 2024 Nordic Legal Consulting. All rights reserved.",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Experts", href: "#experts" },
        { label: "Blog", href: "#blog" },
      ],
      serviceLinks: [
        { label: "Family Reunification", href: "#services" },
        { label: "Visa for Denmark", href: "#services" },
        { label: "Sweden: EU Citizen", href: "#services" },
      ],
    },
    da: {
      description:
        "Ekspert immigration juridiske tjenester for Danmark, Sverige og Tyskland. Vi hjælper familier med at genforenes og enkeltpersoner med at opnå deres immigrationsmål med professionel vejledning og støtte.",
      quickLinks: "Hurtige Links",
      services: "Tjenester",
      contact: "Kontakt Info",
      followUs: "Følg Os",
      copyright:
        "© 2024 Nordic Legal Consulting. Alle rettigheder forbeholdes.",
      links: [
        { label: "Om Os", href: "#about" },
        { label: "Vores Eksperter", href: "#experts" },
        { label: "Blog", href: "#blog" },
        { label: "Privatlivspolitik", href: "#privacy" },
      ],
      serviceLinks: [
        { label: "Familiesammenføring", href: "#services" },
        { label: "Visa for Danmark", href: "#services" },
        { label: "Sverige: EU Borger", href: "#services" },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/TransparentLogo.png"
                alt="Nordic Legal Consulting"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">{t.description}</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1C1xERVtyR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nordiclegalconsulting?igsh=MTMxMGhmZmxyZXhoag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@nordiclegalconsul?_t=ZN-8xYr5Su5Fsk&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {t.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.services}</h3>
            <ul className="space-y-3">
              {t.serviceLinks.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">{t.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  København, Danmark
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">+45 50 47 60 37</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@nordiclegalconsulting.dk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
