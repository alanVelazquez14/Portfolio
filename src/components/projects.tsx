import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      img: "/depurapp.png",
      title: "DEPURAPP",
      description: "projects.description_depurapp",
      skills: ["React", "Nest.js", "PostgreSQL", "Clerk"],
      featured: true,
      isFounder: true,
      code: "https://github.com/alanVelazquez14/DepurApp",
      demo: "https://depurapp.vercel.app/",
    },
    {
      img: "/tiko.png",
      title: "TIKO SOLUCIONES",
      description: "projects.description_tiko",
      skills: ["Next.js", "TypeScript", "Supabase", "Maps API"],
      featured: true,
      isFounder: true,
      code: "https://github.com/alanVelazquez14/tiko-soluciones",
      demo: "https://tikosoluciones.com/",
    },
    {
      img: "/project1.png",
      title: "HR SYSTEM",
      description: "projects.description1",
      skills: ["Next.js", "Clerk", "Stripe"],
      code: "https://github.com/HRSYSTEM-PROJECT/front",
      demo: "https://front-git-main-hr-systems-projects.vercel.app/",
    },
    {
      img: "/project2.png",
      title: "GESTIÓNPRO",
      description: "projects.description2",
      skills: ["Nest.js", "TypeORM", "MongoDB"],
      code: "https://github.com/alanVelazquez14/front-ringmotos",
      demo: "https://ring-motos.vercel.app/",
    },
    {
      img: "/project3.png",
      title: "CODEXA STUDIO",
      description: "projects.description3",
      skills: ["React", "Node.js", "S. Components"],
      code: "https://github.com/alanVelazquez14/CodexaStudio",
      demo: "https://codexa-studio.vercel.app/",
    },
    {
      img: "/project4.png",
      title: "HOME BURGER",
      description: "projects.description4",
      skills: ["React", "Redux", "Express"],
      code: "https://github.com/alanVelazquez14/Landin-page-React",
      demo: "https://landin-page-react.vercel.app/home",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#090812] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mb-5">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#e63946] font-mono text-[10px] tracking-[0.3em] uppercase">
                <span className="w-8 h-[1px] bg-[#800020]"></span>
                Proyectos Seleccionados
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-none">
                Soluciones <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800020] via-[#e63946] to-[#800020] italic">
                  Reales
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-[#121217] border border-white/5 transition-all duration-500 hover:border-[#800020]/50 ${
                project.featured
                  ? "md:col-span-6 h-[300px]"
                  : "md:col-span-3 h-[350px]"
              }`}
            >
              <div className="absolute inset-0 bg-[#800020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 z-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090812] via-[#090812]/70 to-transparent" />
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col">
                <div className="mt-auto">
                  {project.isFounder && (
                    <div className="mb-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                      <span className="inline-block px-3 py-1 bg-[#800020]/20 border border-[#800020]/50 text-[#fd7984] text-[9px] uppercase font-black rounded-full tracking-wider shadow-[0_0_15px_rgba(128,0,32,0.2)]">
                        Founder & Lead Dev
                      </span>
                    </div>
                  )}
                  <div className="mb-4 flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-[#800020]/30 px-2.5 py-1 rounded text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h3
                    className={`font-black mb-2 italic tracking-tighter transition-colors group-hover:text-[#e63946] ${project.featured ? "text-3xl" : "text-2xl"}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2 max-w-[280px]">
                    {t(project.description)}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#800020] text-white rounded-full text-[10px] font-bold hover:bg-[#a01a1a] transition-all shadow-xl shadow-black/50"
                    >
                      VER DEMO <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
