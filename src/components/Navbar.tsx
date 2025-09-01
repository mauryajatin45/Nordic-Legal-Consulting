import React, { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [openLang, setOpenLang] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: language === "en" ? "Services" : "Tjenester", href: "/#services" },
    { label: language === "en" ? "About us" : "Om os", href: "/about" },
    { label: language === "en" ? "FAQ" : "Ofte stillede", href: "/#faqs" },
    { label: language === "en" ? "Contact" : "Kontakt", href: "/#contact" },
  ];

  const handleNav = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      // ensure root then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href.replace("/", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      navigate(href);
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
            aria-label="Home"
          >
            <img
              src="/Nordic1.png"
              alt="Nordic Legal Consulting"
              className="h-36 w-auto"
            />
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((n) => (
              <button
                key={n.label}
                onClick={() => handleNav(n.href)}
                className="text-gray-700 hover:text-blue-700 transition-colors font-bold tracking-wide"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right: lang + CTA */}
          <div className="flex items-center gap-4">
            {/* language dropdown */}
            <div className="relative hidden md:flex items-center">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition"
                aria-expanded={openLang}
              >
                <Globe className="w-5 h-5" />
                <span className="font-bold">
                  {language === "en" ? "ENG" : "DA"}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {openLang && (
                <div className="absolute right-0 mt-3 w-36 bg-white border border-gray-200 rounded-lg shadow">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setOpenLang(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("da");
                      setOpenLang(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Dansk
                  </button>
                </div>
              )}
            </div>

            {/* CTA pill */}
            <button
              onClick={() => handleNav("/#contact")}
              className="hidden md:inline-block bg-[#17234A] text-white px-5 py-2.5 rounded-full font-semibold shadow hover:opacity-95 transition"
            >
              {language === "en"
                ? "Free consultation"
                : "Gratis konsultation"}
            </button>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItems.map((n) => (
                <button
                  key={n.label}
                  onClick={() => handleNav(n.href)}
                  className="text-left px-3 py-3 hover:bg-gray-50"
                >
                  {n.label}
                </button>
              ))}

              <div className="px-3 py-2">
                <button
                  onClick={() => setLanguage(language === "en" ? "da" : "en")}
                  className="w-full text-left flex items-center gap-2 px-2 py-2"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">
                    {language === "en"
                      ? "Switch to Dansk"
                      : "Switch to English"}
                  </span>
                </button>
              </div>

              <div className="px-3">
                <button
                  onClick={() => handleNav("/contact")}
                  className="w-full text-white px-4 py-3 rounded-full bg-[#17234A] font-semibold"
                >
                  {language === "en"
                    ? "Free consultation"
                    : "Gratis konsultation"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
