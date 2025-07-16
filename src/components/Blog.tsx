import React from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

interface BlogProps {
  language: string;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const content = {
    en: {
      title: "LATEST IMMIGRATION NEWS & INSIGHTS",
      subtitle:
        "Stay updated with the latest immigration law changes and helpful guides",
      readMore: "Read More",
      posts: [
        {
          title: "New Changes to Danish Family Reunification Laws 2024",
          excerpt:
            "Important updates to family reunification requirements that could affect your application process.",
          date: "March 15, 2024",
          readTime: "5 min read",
          image:
            "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Law Updates",
        },
        {
          title: "Complete Guide to EU Blue Card Applications",
          excerpt:
            "Everything you need to know about applying for an EU Blue Card in Denmark, including requirements and process.",
          date: "March 10, 2024",
          readTime: "8 min read",
          image:
            "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Guides",
        },
        {
          title: "Understanding Danish Immigration Point System",
          excerpt:
            "A comprehensive breakdown of how the Danish immigration point system works and how to maximize your score.",
          date: "February 28, 2024",
          readTime: "7 min read",
          image:
            "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Guides",
        },
      ],
    },
    da: {
      title: "SENESTE IMMIGRATION NYHEDER & INDSIGTER",
      subtitle:
        "Hold dig opdateret med de seneste ændringer i immigrationslovgivningen og nyttige guides",
      readMore: "Læs Mere",
      posts: [
        {
          title: "Nye Ændringer til Danske Familiesammenføringslove 2024",
          excerpt:
            "Vigtige opdateringer til familiesammenføringskrav, der kunne påvirke din ansøgningsproces.",
          date: "15. marts 2024",
          readTime: "5 min læsning",
          image:
            "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Lovændringer",
        },
        {
          title: "Komplet Guide til EU Blåkort Ansøgninger",
          excerpt:
            "Alt hvad du behøver at vide om at ansøge om et EU Blåkort i Danmark, inklusive krav og proces.",
          date: "10. marts 2024",
          readTime: "8 min læsning",
          image:
            "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Guides",
        },
        {
          title: "Forståelse af Dansk Immigration Pointsystem",
          excerpt:
            "En omfattende opdeling af hvordan det danske immigration pointsystem fungerer og hvordan du maksimerer din score.",
          date: "28. februar 2024",
          readTime: "7 min læsning",
          image:
            "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
          category: "Guides",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" id="blog">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
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

        <div className="flex flex-wrap justify-center gap-8">
          {t.posts.map((post, index) => (
            <div
              key={index}
              className="w-80 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <a
                  href={
                    post.title === "New Changes to Danish Family Reunification Laws 2024" ||
                    post.title ===
                      "Nye Ændringer til Danske Familiesammenføringslove 2024"
                      ? "/blogs/family-reunification"
                      : post.title ===
                          "Complete Guide to EU Blue Card Applications" ||
                        post.title ===
                          "Komplet Guide til EU Blåkort Ansøgninger"
                      ? "/blogs/eu-blue-card"
                      : post.title ===
                          "Understanding Danish Immigration Point System" ||
                        post.title ===
                          "Forståelse af Dansk Immigration Pointsystem"
                      ? "/blogs/immigration-points"
                      : "#"
                  }
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group"
                >
                  {t.readMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
