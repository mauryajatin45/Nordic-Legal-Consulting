import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsProps {
  language: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
const timerRef = useRef<any>(null);

  const content = {
    en: {
      title: "WHAT OUR CLIENTS SAY",
      subtitle:
        "Real Experiences From Families We've Helped Reunite In Denmark",
      testimonials: [
        {
          name: "Ahmed Hassan",
          country: "Egypt",
          case: "Family Reunification",
          rating: 5,
          text: "Nordic Legal Consulting made our family reunification process smooth and stress-free. Thomas guided us through every step and we got approved in just 8 months. Highly recommended!",
          image:
            "https://ceocoachinginternational.com/wp-content/uploads/2023/04/Ahmed-Hassan.jpeg",
        },
        {
          name: "Carlos Martinez",
          country: "Spain",
          case: "EU Blue Card",
          rating: 5,
          text: "Professional, knowledgeable, and always available to answer questions. Lars helped me get my EU Blue Card approved quickly. The service exceeded my expectations.",
          image:
            "https://images.ecestaticos.com/0j2qXjHVZMK01nXxEBIRkFSGkzQ=/0x0:762x483/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3f%2Fa52%2F543%2Fb3fa52543db3bdbd149288be96cd1885.jpg",
        },
        {
          name: "Raj Patel",
          country: "India",
          case: "Student Visa",
          rating: 5,
          text: "Jonas was incredibly helpful with my student visa application. He explained everything clearly and helped me gather all the necessary documents. Got approved on first try!",
          image:
            "https://ipes-food.org/wp-content/uploads/2024/02/1679499423_big.jpg",
        },
        {
          name: "Milos Popovic",
          country: "Serbia",
          case: "Work Permit",
          rating: 5,
          text: "Excellent service from start to finish. The team was professional, responsive, and made the complex immigration process much easier to understand and navigate.",
          image:
            "https://www.ece.utoronto.ca/wp-content/uploads/2012/11/M_Popovic_t2QT28ca_400x400.jpg",
        },
        {
          name: "Chen Wei",
          country: "China",
          case: "Family Reunification",
          rating: 5,
          text: "After being rejected once by another lawyer, Nordic Legal Consulting helped us reapply successfully. Their attention to detail and expertise made all the difference.",
          image:
            "https://dam.upmc.com/-/media/chp/research/images/researchers/chen_wei_160422.jpg?rev=c6241b81ab9a4ca38b178bbd58d336b0",
        },
      ],
    },
    da: {
      title: "HVAD VORES KLIENTER SIGER",
      subtitle:
        "Virkelige Oplevelser Fra Familier, Vi Har Hjulpet Med At Genforenes I Danmark",
      testimonials: [
        {
          name: "Ahmed Hassan",
          country: "Egypten",
          case: "Familiesammenføring",
          rating: 5,
          text: "Nordic Legal Consulting gjorde vores familiesammenføringsproces glat og stressfri. Thomas guidede os gennem hvert trin, og vi blev godkendt på kun 8 måneder. Stærkt anbefalet!",
          image:
            "https://ceocoachinginternational.com/wp-content/uploads/2023/04/Ahmed-Hassan.jpeg",
        },
        {
          name: "Carlos Martinez",
          country: "Spanien",
          case: "EU Blåkort",
          rating: 5,
          text: "Professionel, vidende og altid tilgængelig til at besvare spørgsmål. Lars hjalp mig med at få mit EU Blåkort godkendt hurtigt. Servicen overgik mine forventninger.",
          image:
            "https://images.ecestaticos.com/0j2qXjHVZMK01nXxEBIRkFSGkzQ=/0x0:762x483/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3f%2Fa52%2F543%2Fb3fa52543db3bdbd149288be96cd1885.jpg",
        },
        {
          name: "Raj Patel",
          country: "Indien",
          case: "Studievisa",
          rating: 5,
          text: "Jonas var utrolig hjælpsom med min studievisa-ansøgning. Han forklarede alt klart og hjalp mig med at samle alle nødvendige dokumenter. Blev godkendt på første forsøg!",
          image:
            "https://ipes-food.org/wp-content/uploads/2024/02/1679499423_big.jpg",
        },
        {
          name: "Milos Popovic",
          country: "Serbien",
          case: "Arbejdstilladelse",
          rating: 5,
          text: "Fremragende service fra start til slut. Teamet var professionelt, lydhørt og gjorde den komplekse immigrationsproces meget lettere at forstå og navigere.",
          image:
            "https://www.ece.utoronto.ca/wp-content/uploads/2012/11/M_Popovic_t2QT28ca_400x400.jpg",
        },
        {
          name: "Chen Wei",
          country: "Kina",
          case: "Familiesammenføring",
          rating: 5,
          text: "Efter at være blevet afvist en gang af en anden advokat, hjalp Nordic Legal Consulting os med at genansøge med succes. Deres opmærksomhed på detaljer og ekspertise gjorde hele forskellen.",
          image:
            "https://dam.upmc.com/-/media/chp/research/images/researchers/chen_wei_160422.jpg?rev=c6241b81ab9a4ca38b178bbd58d336b0",
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
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % t.testimonials.length);
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
  }, [t.testimonials.length, isHovered]);

  const nextTestimonial = () => {
    setUserInteracted(true);
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.length);
    startTimer();
  };

  const prevTestimonial = () => {
    setUserInteracted(true);
    setCurrentIndex(
      (prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length
    );
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

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main testimonial display */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {t.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 relative shadow-xl">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Client photo and info */}
                      <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 ring-4 ring-gray-200"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Star className="w-4 h-4 text-white fill-current" />
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {testimonial.country}
                        </p>
                        <p className="text-blue-600 text-sm font-medium">
                          {testimonial.case}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start mt-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <div className="lg:col-span-2">
                        <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
                          "{testimonial.text}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 border border-gray-200 shadow-lg"
              aria-label={language === 'en' ? 'Previous testimonial' : 'Forrige anbefaling'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Progress indicators */}
            <div className="flex space-x-2">
              {t.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setUserInteracted(true);
                    startTimer();
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      : "w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 border border-gray-200 shadow-lg"
              aria-label={language === 'en' ? 'Next testimonial' : 'Næste anbefaling'}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;