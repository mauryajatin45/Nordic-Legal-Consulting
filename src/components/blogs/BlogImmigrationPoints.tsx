import React from "react";

interface BlogProps {
  language: string;
}

const BlogImmigrationPoints: React.FC<BlogProps> = ({ language }) => {
  const content = {
    en: {
      title: "Understanding Danish Immigration Point System",
      date: "February 28, 2024",
      readTime: "9 min read",
      body: (
        <>
          <p>
            A comprehensive breakdown of how the Danish immigration point system works and how to maximize your score.
          </p>
          <p>
            The Danish immigration point system evaluates applicants based on various criteria including education, work experience, language skills, and age.
          </p>
          <img
            src="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Immigration Points System"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            Understanding how points are allocated can help applicants improve their chances of approval. This article provides detailed insights and tips.
          </p>
          <p>
            Key factors include education level, relevant work experience, proficiency in Danish or English, and age. Applicants should focus on improving these areas to maximize their score.
          </p>
          <p>
            For personalized advice, contact our immigration consultants who can help you navigate the points system effectively.
          </p>
        </>
      ),
    },
    da: {
      title: "Forståelse af Dansk Immigration Pointsystem",
      date: "28. februar 2024",
      readTime: "9 min læsning",
      body: (
        <>
          <p>
            En omfattende opdeling af hvordan det danske immigration pointsystem fungerer og hvordan du maksimerer din score.
          </p>
          <p>
            Det danske immigration pointsystem vurderer ansøgere baseret på forskellige kriterier, herunder uddannelse, erhvervserfaring, sprogkundskaber og alder.
          </p>
          <img
            src="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Immigrationspointsystem"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            Forståelse af hvordan point tildeles kan hjælpe ansøgere med at forbedre deres chancer for godkendelse. Denne artikel giver detaljerede indsigter og tips.
          </p>
          <p>
            Vigtige faktorer inkluderer uddannelsesniveau, relevant erhvervserfaring, færdigheder i dansk eller engelsk og alder. Ansøgere bør fokusere på at forbedre disse områder for at maksimere deres score.
          </p>
          <p>
            For personlig rådgivning, kontakt vores immigrationskonsulenter, som kan hjælpe dig med at navigere effektivt i pointsystemet.
          </p>
        </>
      ),
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
      <div className="text-sm text-gray-500 mb-8">
        <span>{t.date}</span> · <span>{t.readTime}</span>
      </div>
      <div className="prose prose-lg text-gray-700">{t.body}</div>
    </article>
  );
};

export default BlogImmigrationPoints;
