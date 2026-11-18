import React from "react";
import { ArrowRight, Github, Linkedin, MousePointer2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiWordpress,
  SiNestjs,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
import type { JSX } from "react/jsx-runtime";

const techIcons: Record<string, JSX.Element> = {
  JavaScript: <IoLogoJavascript />,
  TypeScript: <BiLogoTypescript />,
  Python: <IoLogoPython />,
  React: <BiLogoReact />,
  "Next.js": <SiNextdotjs />,
  Tailwind: <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  NestJS: <SiNestjs />,
  Supabase: <SiSupabase />,
  Prisma: <SiPrisma />,
  WordPress: <SiWordpress />,
};

const iconColors: Record<string, string> = {
  JavaScript: "group-hover:text-[#F7DF1E]",
  TypeScript: "group-hover:text-[#3178C6]",
  Python: "group-hover:text-[#3776AB]",
  React: "group-hover:text-[#61DAFB]",
  "Next.js": "group-hover:text-white",
  Tailwind: "group-hover:text-[#38BDF8]",
  MongoDB: "group-hover:text-[#47A248]",
  NestJS: "group-hover:text-[#E02340]",
  "Node.js": "group-hover:text-[#339933]",
  Supabase: "group-hover:text-[#3ECF8E]",
  Prisma: "group-hover:text-[#5A67D8]",
  WordPress: "group-hover:text-[#21759B]",
};

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[5px] h-[5px] bg-[#800020]/40 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const floatingTechs = [
    {
      name: "React",
      pos: "top-[5%] left-[10%]",
      size: "text-5xl",
      delay: "0s",
    },
    {
      name: "Next.js",
      pos: "top-[35%] left-[0%]",
      size: "text-4xl",
      delay: "1.2s",
    },
    {
      name: "TypeScript",
      pos: "top-[65%] left-[12%]",
      size: "text-5xl",
      delay: "2.5s",
    },
    {
      name: "Node.js",
      pos: "top-[2%] right-[15%]",
      size: "text-4xl",
      delay: "0.8s",
    },
    {
      name: "NestJS",
      pos: "top-[30%] right-[2%]",
      size: "text-6xl",
      delay: "1.5s",
    },
    {
      name: "Tailwind",
      pos: "bottom-[10%] right-[8%]",
      size: "text-4xl",
      delay: "3s",
    },
    {
      name: "MongoDB",
      pos: "bottom-[2%] left-[35%]",
      size: "text-3xl",
      delay: "2s",
    },
    {
      name: "Python",
      pos: "top-[48%] left-[42%]",
      size: "text-3xl",
      delay: "1.8s",
    },
    {
      name: "Supabase",
      pos: "top-[12%] left-[40%]",
      size: "text-3xl",
      delay: "0.5s",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#090812] px-6 lg:px-20"
    >
      <style>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 4s linear infinite;
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(6px); }
          50% { transform: translateY(-18px) translateX(-4px); }
          75% { transform: translateY(-6px) translateX(-8px); }
        }
        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#800020]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-[#7c3aed]/5 rounded-full blur-[100px]" />
      </div>

      <Particles />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#800020]/30 bg-[#800020]/5 text-white text-[11px] font-mono tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800020]"></span>
            </span>
            Software Developer
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
            {t("hero.greeting")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800020] via-[#fd7984] to-[#800020] animate-gradient-text">
              Alan Velazquez
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            {t("hero.paragraph")} {" "}
            <br />
            <span className="text-gray-200 italic font-medium">
              {t("hero.cta")}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-[#800020] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(128,0,32,0.4)] flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2 uppercase tracking-wider text-sm">
                {t("buttons.projects")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>

            <div className="flex items-center gap-5 border-l border-white/10 pl-6">
              <SocialIcon
                href="https://github.com/alanVelazquez14"
                icon={<Github size={22} />}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/alanvelazquez14/"
                icon={<Linkedin size={22} />}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://wa.me/5492664183710"
                icon={<FaWhatsapp size={22} />}
                label="WhatsApp"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-full h-[550px] animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#800020]/25 rounded-full blur-[100px]" />

          {floatingTechs.map((tech) => (
            <div
              key={tech.name}
              className={`absolute ${tech.pos} animate-float-gentle group cursor-default`}
              style={{ animationDelay: tech.delay }}
            >
              <div className="relative p-5 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[2rem] hover:bg-white/[0.08] hover:border-[#800020]/40 transition-all duration-500 hover:scale-250 shadow-2xl">
                <span
                  className={`${tech.size} transition-all duration-500 text-gray-400 ${iconColors[tech.name]} group-hover:drop-shadow-[0_0_15px_rgba(128,0,32,0.6)]`}
                >
                  {techIcons[tech.name]}
                </span>

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-[0.2em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}

          <div className="absolute top-[1%] right-[25%] z-20 bg-[#121217]/95 border border-[#800020]/30 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce shadow-[#800020]/10 backdrop-blur-xl">
            <div className="p-2 bg-[#800020]/20 rounded-lg text-[#800020]">
              <MousePointer2 size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter font-bold">
                Último proyecto
              </p>
              <p className="text-sm font-black text-white italic">
                Tiko Soluciones
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute right-10 bottom-10 hidden md:flex flex-col items-center gap-6">
        <span className="rotate-90 text-[10px] tracking-[0.5em] text-gray-600 uppercase origin-left font-black">
          Scroll down
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#800020] via-[#800020]/40 to-transparent" />
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#121217] border border-white/10 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
}
