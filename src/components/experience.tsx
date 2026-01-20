import { Briefcase, FileText, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const experienceItems = [
  // EDUCACIÓN
  {
    type: "education",
    title: "experience.job6",
    organization: "Universidad Nacional de San Luis",
    period: "experience.period6",
    description: "experience.description6",
  },
  {
    type: "education",
    title: "experience.job3",
    organization: "Soy Henry",
    period: "2024 - 2025",
    description: "experience.description3",
    certificate: "/SoyHenry.pdf",
  },
  {
    type: "education",
    title: "experience.job1",
    organization: "Nucba",
    period: "2023",
    description: "experience.description1",
    certificate: "/Certificado_Coding_Bootcamp_Full_Stack.pdf",
  },

  // EXPERIENCIA LABORAL
  {
    type: "work",
    title: "experience.job7",
    organization: "experience.empresa7",
    period: "experience.period7",
    description: "experience.description7",
  },
  {
    type: "work",
    title: "experience.job4",
    organization: "Dexpega",
    period: "experience.period4",
    description: "experience.description4",
  },
  {
    type: "work",
    title: "experience.job5",
    organization: "SwaplyAr",
    period: "experience.period5",
    description: "experience.description5",
  },
  {
    type: "work",
    title: "experience.job2",
    organization: "Banco Santander",
    period: "2021 - 2024",
    description: "experience.description2",
  },
];

export default function Experience() {
  const { t } = useTranslation();

  const educationItems = experienceItems.filter(
    (item) => item.type === "education"
  );

  const workItems = experienceItems.filter(
    (item) => item.type === "work"
  );

  const renderItem = (exp: any, index: number) => (
    <div
      key={index}
      className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary/50 transition-colors"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="space-y-3">
        <div className="flex items-center gap-5 text-primary">
          {exp.type === "education" ? (
            <GraduationCap className="h-5 w-5" />
          ) : (
            <Briefcase className="h-5 w-5" />
          )}
          <span className="text-sm font-medium">{t(exp.period)}</span>
        </div>

        <h3 className="text-xl font-semibold">{t(exp.title)}</h3>

        <p className="text-muted-foreground font-medium">
          {t(exp.organization)}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(exp.description)}
        </p>
      </div>

      {exp.certificate && (
        <a
          href={exp.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2"
        >
          <FileText className="w-4 h-4" />
          {t("experience.certificate")}
        </a>
      )}
    </div>
  );

  return (
    <section
      id="experience"
      className="w-full mx-auto px-6 py-20 bg-[#070a0fef] shadow-xl shadow-black/30"
    >
      {/* Título */}
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold mb-4 text-center">
          {t("experience.title")}
        </h2>
      </div>

      {/* Columnas */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row gap-20">
        {/* Educación */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            {t("experience.education")}
          </h3>

          {educationItems.map(renderItem)}
        </div>

        {/* Experiencia laboral */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            {t("experience.work")}
          </h3>

          {workItems.map(renderItem)}
        </div>
      </div>

      {/* CV */}
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <p className="text-lg md:text-xl sm:text-base text-gray-500 mt-20 sm:mt-16 text-center">
          {t("experience.cv")}{" "}
          <a
            href="/ALAN VELAZQUEZ CV- full.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            CV<span className="text-lg md:text-xl text-gray-500">.</span>
          </a>
        </p>
      </div>
    </section>
  );
}
