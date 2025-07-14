import React from "react";

interface BlogProps {
  language: string;
}

const BlogEUBlueCard: React.FC<BlogProps> = ({ language }) => {
  const content = {
    en: {
      title: "Complete Guide to EU Blue Card Applications",
      date: "March 10, 2024",
      readTime: "10 min read",
      body: (
        <>
          <p>
            Everything you need to know about applying for an EU Blue Card in Denmark, including requirements and process.
          </p>
          <p>
            The EU Blue Card is a residence permit for highly skilled non-EU citizens. This guide covers eligibility criteria, application steps, and tips for a successful application.
          </p>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="EU Blue Card"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            Key requirements include a valid job offer, minimum salary threshold, and relevant qualifications. Processing times may vary depending on the applicant's country of origin.
          </p>
          <p>
            The application process involves submitting documentation, attending interviews, and waiting for approval. It is important to prepare thoroughly to avoid delays.
          </p>
          <p>
            Contact our experts for personalized assistance with your EU Blue Card application to ensure a smooth and successful process.
          </p>
        </>
      ),
    },
    da: {
      title: "Komplet Guide til EU Blåkort Ansøgninger",
      date: "10. marts 2024",
      readTime: "10 min læsning",
      body: (
        <>
          <p>
            Alt hvad du behøver at vide om at ansøge om et EU Blåkort i Danmark, inklusive krav og proces.
          </p>
          <p>
            EU Blåkortet er en opholdstilladelse for højt kvalificerede ikke-EU borgere. Denne guide dækker berettigelseskriterier, ansøgningsprocessen og tips til en succesfuld ansøgning.
          </p>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="EU Blåkort"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            Vigtige krav inkluderer et gyldigt jobtilbud, minimumsløn, og relevante kvalifikationer. Behandlingstider kan variere afhængigt af ansøgerens oprindelsesland.
          </p>
          <p>
            Ansøgningsprocessen involverer indsendelse af dokumentation, deltagelse i interviews og ventetid på godkendelse. Det er vigtigt at forberede sig grundigt for at undgå forsinkelser.
          </p>
          <p>
            Kontakt vores eksperter for personlig assistance med din EU Blåkort ansøgning for at sikre en glat og succesfuld proces.
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

export default BlogEUBlueCard;
