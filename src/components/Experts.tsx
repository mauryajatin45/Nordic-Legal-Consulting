import React, { useState, useEffect } from "react";
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

  const content = {
    en: {
      title: "OUR LEGAL EXPERTS",
      subtitle: "Meet our experienced immigration lawyers",
      viewProfile: "View Full Profile",
      nextExpert: "Next Expert",
      prevExpert: "Previous Expert",
      experts: [
        {
          name: "Sarah Nielsen",
          title: "Senior Immigration Lawyer",
          experience: "12+ years",
          specialization: "Family Reunification & EU Law",
          description:
            "Sarah specializes in complex family reunification cases and has successfully handled over 500 immigration cases. Her expertise in Danish and EU immigration law makes her one of the most sought-after lawyers in the field.",
          achievements: [
            "500+ successful cases",
            "Certified EU Law specialist",
            "Danish Bar Association member",
          ],
          rating: 4.9,
          cases: 523,
          image:
            "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
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
          name: "Maria Petersen",
          title: "Associate Immigration Lawyer",
          experience: "8+ years",
          specialization: "Student Visas & Residence Permits",
          description:
            "Maria focuses on student immigration and residence permit applications. Her compassionate approach and attention to detail have helped hundreds of students and young professionals start their new life in Denmark.",
          achievements: [
            "300+ student cases",
            "Residence permit specialist",
            "Youth advocacy award",
          ],
          rating: 4.9,
          cases: 387,
          image:
            "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
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
          name: "Sarah Nielsen",
          title: "Senior Immigrationsadvokat",
          experience: "12+ år",
          specialization: "Familiesammenføring & EU-ret",
          description:
            "Sarah specialiserer sig i komplekse familiesammenføringssager og har med succes håndteret over 500 immigrationssager. Hendes ekspertise inden for dansk og EU-immigrationsret gør hende til en af de mest efterspurgte advokater på området.",
          achievements: [
            "500+ succesfulde sager",
            "Certificeret EU-ret specialist",
            "Dansk Advokatsamfund medlem",
          ],
          rating: 4.9,
          cases: 523,
          image:
            "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
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
          name: "Maria Petersen",
          title: "Associeret Immigrationsadvokat",
          experience: "8+ år",
          specialization: "Studievisa & Opholdstilladelser",
          description:
            "Maria fokuserer på studieimmigration og opholdstilladelsesansøgninger. Hendes medfølende tilgang og opmærksomhed på detaljer har hjulpet hundredvis af studerende og unge fagfolk med at starte deres nye liv i Danmark.",
          achievements: [
            "300+ studiesager",
            "Opholdstilladelse specialist",
            "Ungdomsadvokat pris",
          ],
          rating: 4.9,
          cases: 387,
          image:
            "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExpert((prev) => (prev + 1) % t.experts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [t.experts.length]);

  const nextExpert = () => {
    setActiveExpert((prev) => (prev + 1) % t.experts.length);
  };

  const prevExpert = () => {
    setActiveExpert((prev) => (prev - 1 + t.experts.length) % t.experts.length);
  };

  return (
    <section
      id="experts"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4"></span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>  

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Expert Images - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
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
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextExpert}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {t.experts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExpert(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeExpert ? "bg-blue-500 w-8" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Expert Details - Right Side */}
          <div className="lg:col-span-3">
            <div className="relative">
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
                          {expert.cases} cases handled
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
                          <p className="text-gray-600 text-sm">Experience</p>
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
                            Specialization
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
                        Key Achievements
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
