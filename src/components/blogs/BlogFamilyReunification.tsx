import React from "react";

interface BlogProps {
  language: string;
}

const BlogFamilyReunification: React.FC<BlogProps> = ({ language }) => {
  const content = {
    en: {
      title: "New Changes to Danish Family Reunification Laws 2024",
      date: "March 15, 2024",
      readTime: "7 min read",
      body: (
        <>
          <p>
            Important updates to family reunification requirements that could affect your application process.
          </p>
          <p>
            The Danish government has introduced new changes to the family reunification laws effective from 2024. These changes aim to streamline the application process and clarify eligibility criteria.
          </p>
          <p>
            Key changes include updated income requirements, documentation standards, and processing times. Applicants are advised to review the new guidelines carefully to ensure compliance.
          </p>
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Family Reunification"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            The new income requirements specify a minimum threshold that applicants must meet to qualify for family reunification. This is intended to ensure financial stability for the reunited family.
          </p>
          <p>
            Documentation standards have been updated to include more detailed proof of relationship and residency status. Processing times are expected to improve with the introduction of digital application systems.
          </p>
          <p>
            For detailed information and assistance, please contact our immigration experts who can guide you through the updated process.
          </p>
        </>
      ),
    },
    da: {
      title: "Nye Ændringer til Danske Familiesammenføringslove 2024",
      date: "15. marts 2024",
      readTime: "7 min læsning",
      body: (
        <>
          <p>
            Vigtige opdateringer til familiesammenføringskrav, der kunne påvirke din ansøgningsproces.
          </p>
          <p>
            Den danske regering har indført nye ændringer til familiesammenføringslovene gældende fra 2024. Disse ændringer har til formål at strømline ansøgningsprocessen og tydeliggøre berettigelseskriterier.
          </p>
          <p>
            Vigtige ændringer inkluderer opdaterede indkomstkrav, dokumentationsstandarder og behandlingstider. Ansøgere opfordres til nøje at gennemgå de nye retningslinjer for at sikre overholdelse.
          </p>
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Familiesammenføring"
            className="my-6 rounded-lg shadow-lg"
          />
          <p>
            De nye indkomstkrav specificerer en minimumsgrænse, som ansøgere skal opfylde for at kvalificere sig til familiesammenføring. Dette skal sikre økonomisk stabilitet for den genforenede familie.
          </p>
          <p>
            Dokumentationsstandarderne er blevet opdateret til at inkludere mere detaljeret bevis for forhold og opholdstilladelse. Behandlingstider forventes at forbedres med indførelsen af digitale ansøgningssystemer.
          </p>
          <p>
            For detaljeret information og assistance, kontakt venligst vores immigrationsspecialister, som kan guide dig gennem den opdaterede proces.
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

export default BlogFamilyReunification;
