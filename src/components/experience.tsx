import { Briefcase, Calendar, FileText, GraduationCap } from "lucide-react";
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
    title: "experience.job5",
    organization: "SwaplyAr",
    period: "experience.period5",
    description: "experience.description5",
  },
  {
    type: "work",
    title: "experience.job4",
    organization: "Dexpega",
    period: "2025 - 2026",
    description: "experience.description4",
  },
  {
    type: "work",
    title: "experience.job7",
    organization: "experience.empresa7",
    period: "2023 - 2025",
    description: "experience.description7",
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
    (item) => item.type === "education",
  );
  const workItems = experienceItems.filter((item) => item.type === "work");

  const renderItem = (exp: any, index: number) => (
    <div key={index} className="group relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#800020] via-white/10 to-transparent group-last:h-2" />

      <div className="absolute -left-[4px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#121217] border-2 border-[#800020] group-hover:bg-[#e63946] group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(128,0,32,0.5)]" />

      <div className="space-y-4 transition-transform duration-300 group-hover:translate-x-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e63946] shadow-sm">
            {exp.type === "education" ? (
              <GraduationCap size={14} />
            ) : (
              <Briefcase size={14} />
            )}
            <span className="text-[10px] font-bold uppercase tracking-wider italic">
              {t(exp.type === "education" ? "Education" : "Experience")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[11px]">
            <Calendar size={12} />
            {t(exp.period)}
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-black italic tracking-tight text-white group-hover:text-[#e63946] transition-colors">
            {t(exp.title)}
          </h3>
          <p className="text-[#800020] font-bold text-sm tracking-wide uppercase">
            {t(exp.organization)}
          </p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed max-w-md font-medium">
          {t(exp.description)}
        </p>

        {exp.certificate && (
          <a
            href={exp.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-[#800020] border border-white/10 px-4 py-2 rounded-lg transition-all"
          >
            <FileText size={14} />
            {t("experience.certificate").toUpperCase()}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="w-full py-32 bg-[#090812] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800020]/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-[#e63946] font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#800020]"></span>
            Trayectoria
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Resumen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#e63946] italic">
              Profesional
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-12">
            <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
              Experiencia Laboral
              <span className="h-[1px] flex-1 bg-white/5"></span>
            </h3>
            <div className="space-y-2">{workItems.map(renderItem)}</div>
          </div>

          {/* Columna Derecha: Educación */}
          <div className="space-y-12">
            <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
              Formación Académica
              <span className="h-[1px] flex-1 bg-white/5"></span>
            </h3>
            <div className="space-y-2">{educationItems.map(renderItem)}</div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 font-mono text-sm mb-6">
            {t("experience.cv")}{" "}
            <a
              href="/Curriculum_Vitae_Desarrollador_Full_Stack_Alan_Velazquez.pdf"
              target="_blank"
              className="group relative overflow-hidden"
            >
              <span className="text-white font-black transition-colors duration-300 hover:text-[#800020]">
                CV
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
