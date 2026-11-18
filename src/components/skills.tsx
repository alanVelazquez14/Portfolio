import { useTranslation } from "react-i18next";
import {
  Terminal,
  Smartphone,
  Database,
  Cloud,
  Sparkles,
  Cctv,
} from "lucide-react";

interface SkillCategory {
  titleKey: string;
  icon: any;
  skills: string[];
  size: "small" | "large";
}

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: "skills.languages",
      icon: Terminal,
      skills: ["JavaScript", "TypeScript", "Python"],
      size: "small",
    },
    {
      titleKey: "skills.frontend",
      icon: Smartphone,
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "Redux",
        "Expo",
      ],
      size: "large",
    },
    {
      titleKey: "skills.backend",
      icon: Database,
      skills: [
        "Node.js",
        "NestJS",
        "Prisma",
        "Supabase",
        "PostgreSQL",
        "MongoDB",
      ],
      size: "large",
    },
    {
      titleKey: "skills.ai",
      icon: Sparkles,
      skills: ["Open AI Codex", "Claude Code", "Gemini API"],
      size: "small",
    },
    {
      titleKey: "skills.infra",
      icon: Cloud,
      skills: [
        "Redes y conectividad",
        "Routers y Servidores",
        "Vercel",
        "Railway",
        "Docker",
        "CI/CD",
      ],
      size: "small",
    },
    {
      titleKey: "skills.monitoring",
      icon: Cctv,
      skills: [
        "SoftGuard",
        "iVMS-4200",
        "Smart PSS",
        "CCTV",
        "DVR / NVR",
        "Comunicadores",
      ],
      size: "small",
    }
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-14 bg-[#090812] overflow-hidden"
    >
      {/* Luces de fondo bordó */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#800020]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Mi <span className="text-[#800020]">Stack</span> Tecnológico
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("skills.paragraph")}
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs font-mono text-[#e63946] uppercase tracking-[0.3em]">
              Versión 2026.04
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[180px]">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-[32px] p-8 border border-white/5 bg-white/[0.02] backdrop-blur-md
                transition-all duration-500 hover:border-[#800020]/40 hover:bg-white/[0.04]
                ${category.size === "large" ? "md:col-span-3 lg:col-span-4 row-span-2" : "md:col-span-3 lg:col-span-4 row-span-1"}
                ${index === 4 ? "lg:col-span-8" : ""} 
              `}
            >
              {/* Decoración de fondo de la card */}
              <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-[#800020]/10 transition-colors">
                <category.icon size={120} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-auto">
                  <div className="p-2.5 rounded-xl bg-[#800020]/10 text-[#e63946] border border-[#800020]/20 group-hover:scale-110 transition-transform">
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {t(category.titleKey)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:text-gray-200 group-hover:border-[#800020]/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
