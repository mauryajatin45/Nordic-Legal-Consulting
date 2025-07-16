import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  BookOpen,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ExpertsProps {
  language: string;
}

const Experts: React.FC<ExpertsProps> = ({ language }) => {
  const [activeExpert, setActiveExpert] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: "OUR LEGAL EXPERTS",
      subtitle: "Meet our experienced immigration lawyers",
      viewProfile: "View Full Profile",
      nextExpert: "Next Expert",
      prevExpert: "Previous Expert",
      experts: [
        {
          name: "Thomas Nielsen",
          title: "Senior Immigration Lawyer",
          experience: "12+ years",
          specialization: "Family Reunification & EU Law",
          description:
            "Thomas specializes in complex family reunification cases and has successfully handled over 500 immigration cases. His expertise in Danish and EU immigration law makes him one of the most sought-after lawyers in the field.",
          achievements: [
            "500+ successful cases",
            "Certified EU Law specialist",
            "Danish Bar Association member",
          ],
          rating: 4.9,
          cases: 523,
          image:
            "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
        },
        {
          name: "Lars Andersen",
          title: "Immigration Law Partner",
          experience: "15+ years",
          specialization: "Business Immigration & Visas",
          description:
            "Lars brings extensive experience in business immigration and visa applications. He has helped numerous international companies establish their presence in Denmark and assisted professionals in obtaining work permits.",
          achievements: [
            "1000+ visa applications",
            "Business immigration expert",
            "Fluent in 5 languages",
          ],
          rating: 4.8,
          cases: 1247,
          image:
            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
        },
        {
          name: "Hans Erik Andreasen",
          title: "Associate Immigration Lawyer",
          experience: "8+ years",
          specialization: "Student Visas & Residence Permits",
          description:
            "Jonas focuses on student immigration and residence permit applications. His compassionate approach and attention to detail have helped hundreds of students and young professionals start their new life in Denmark.",
          achievements: [
            "300+ student cases",
            "Residence permit specialist",
            "Youth advocacy award",
          ],
          rating: 4.9,
          cases: 387,
          image:
            "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?semt=ais_hybrid&w=740",
        },
      ],
    },
    da: {
      title: "VORES JURIDISKE EKSPERTER",
      subtitle: "Mød vores erfarne immigrationsadvokater",
      viewProfile: "Se Fuld Profil",
      nextExpert: "Næste Ekspert",
      prevExpert: "Forrige Ekspert",
      experts: [
        {
          name: "Thomas Nielsen",
          title: "Senior Immigrationsadvokat",
          experience: "12+ år",
          specialization: "Familiesammenføring & EU-ret",
          description:
            "Thomas specialiserer sig i komplekse familiesammenføringssager og har med succes håndteret over 500 immigrationssager. Hans ekspertise inden for dansk og EU-immigrationsret gør ham til en af de mest efterspurgte advokater på området.",
          achievements: [
            "500+ succesfulde sager",
            "Certificeret EU-ret specialist",
            "Dansk Advokatsamfund medlem",
          ],
          rating: 4.9,
          cases: 523,
          image:
            "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
        },
        {
          name: "Lars Andersen",
          title: "Immigrationsret Partner",
          experience: "15+ år",
          specialization: "Erhvervsimmigration & Visa",
          description:
            "Lars bringer omfattende erfaring inden for erhvervsimmigration og visa-ansøgninger. Han har hjulpet talrige internationale virksomheder med at etablere deres tilstedeværelse i Danmark og assisteret fagfolk med at opnå arbejdstilladelser.",
          achievements: [
            "1000+ visa ansøgninger",
            "Erhvervsimmigration ekspert",
            "Flydende i 5 sprog",
          ],
          rating: 4.8,
          cases: 1247,
          image:
            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
        },
        {
          name: "Hans Erik Andreasen",
          title: "Associeret Immigrationsadvokat",
          experience: "8+ år",
          specialization: "Studievisa & Opholdstilladelser",
          description:
            "Jonas fokuserer på studieimmigration og opholdstilladelsesansøgninger. Hans medfølende tilgang og opmærksomhed på detaljer har hjulpet hundredvis af studerende og unge fagfolk med at starte deres nye liv i Danmark.",
          achievements: [
            "300+ studiesager",
            "Opholdstilladelse specialist",
            "Ungdomsadvokat pris",
          ],
          rating: 4.9,
          cases: 387,
          image:
            "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?semt=ais_hybrid&w=740",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isHovered && !userInteracted) {
        setActiveExpert((prev) => (prev + 1) % t.experts.length);
      }
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [t.experts.length, isHovered, userInteracted]);

  const nextExpert = () => {
    setUserInteracted(true);
    setActiveExpert((prev) => (prev + 1) % t.experts.length);
    startTimer();
  };

  const prevExpert = () => {
    setUserInteracted(true);
    setActiveExpert((prev) => (prev - 1 + t.experts.length) % t.experts.length);
    startTimer();
  };

  const goToExpert = (index: number) => {
    setUserInteracted(true);
    setActiveExpert(index);
    startTimer();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      nextExpert();
    }

    if (touchStart - touchEnd < -50) {
      // swipe right
      prevExpert();
    }
  };

  return (
    <section
      id="experts"
      className="py-12 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={containerRef}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeExpert * 100}%)`,
                width: `${t.experts.length * 100}%`,
              }}
            >
              {t.experts.map((expert, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 shadow-xl w-[90vw]">
                    {/* Expert Image */}
                    {/* <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div> */}

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {expert.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm">
                          {expert.title}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-gray-800 font-semibold text-sm">
                            {expert.rating}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {expert.cases}{" "}
                          {language === "en"
                            ? "cases handled"
                            : "håndterede sager"}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center flex-1 pr-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-600 text-xs leading-tight">
                            {language === "en" ? "Experience" : "Erfaring"}
                          </p>
                          <p className="text-gray-800 font-semibold text-xs leading-tight">
                            {expert.experience}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center flex-1 pl-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-600 text-xs leading-tight">
                            {language === "en"
                              ? "Specialization"
                              : "Specialisering"}
                          </p>
                          <p className="text-gray-800 font-semibold text-xs leading-tight">
                            {expert.specialization}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {expert.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                        <Award className="w-4 h-4 text-yellow-500 mr-1" />
                        {language === "en"
                          ? "Key Achievements"
                          : "Nøglepræstationer"}
                      </h4>
                      <div className="grid gap-1">
                        {expert.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1 mr-2"></div>
                              <span className="text-gray-700 text-xs">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-6 px-2">
            <button
              onClick={prevExpert}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
              aria-label={t.prevExpert}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {t.experts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToExpert(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeExpert ? "bg-blue-500 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to expert ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextExpert}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
              aria-label={t.nextExpert}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 items-center">
          {/* Expert Images - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div
                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {t.experts.map((expert, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === activeExpert
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={prevExpert}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
                  aria-label={t.prevExpert}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextExpert}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
                  aria-label={t.nextExpert}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {t.experts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToExpert(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeExpert ? "bg-blue-500 w-8" : "bg-gray-400"
                    }`}
                    aria-label={`Go to expert ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Expert Details - Right Side */}
          <div className="lg:col-span-3">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {t.experts.map((expert, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === activeExpert
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-8 absolute inset-0"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 shadow-xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {expert.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg">
                          {expert.title}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end mb-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                          <span className="text-gray-800 font-semibold">
                            {expert.rating}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {expert.cases}{" "}
                          {language === "en"
                            ? "cases handled"
                            : "håndterede sager"}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {language === "en" ? "Experience" : "Erfaring"}
                          </p>
                          <p className="text-gray-800 font-semibold">
                            {expert.experience}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {language === "en"
                              ? "Specialization"
                              : "Specialisering"}
                          </p>
                          <p className="text-gray-800 font-semibold">
                            {expert.specialization}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      {expert.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Award className="w-5 h-5 text-yellow-500 mr-2" />
                        {language === "en"
                          ? "Key Achievements"
                          : "Nøglepræstationer"}
                      </h4>
                      <div className="grid gap-3">
                        {expert.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
